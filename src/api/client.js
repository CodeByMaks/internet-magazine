import axios from 'axios';

const CACHE_TIME = 5 * 60 * 1000; // 5 минут
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const cache = new Map();

const client = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || 'http://localhost:3002'}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Включаем поддержку cookies
});

// Функция для получения токена из cookie
const getTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
  return tokenCookie ? tokenCookie.split('=')[1] : null;
};

// Функция для установки токена в cookie
const setTokenCookie = (token) => {
  document.cookie = `token=${token}; path=/; secure; samesite=strict; max-age=86400`;
};

// Функция для удаления токена
const removeTokenCookie = () => {
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
};

// Функция для проверки кэша
const checkCache = (url) => {
  const cachedData = cache.get(url);
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_TIME) {
    return cachedData.data;
  }
  return null;
};

// Функция для сохранения в кэш
const saveToCache = (url, data) => {
  cache.set(url, {
    data,
    timestamp: Date.now()
  });
};

// Добавляем перехватчик запросов
client.interceptors.request.use(
  (config) => {
    console.log('Отправляем запрос:', {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      headers: config.headers
    });

    // Проверяем кэш для GET запросов
    if (config.method === 'get') {
      const cachedData = checkCache(config.url);
      if (cachedData) {
        return Promise.reject({
          __CACHE_HIT__: true,
          data: cachedData
        });
      }
    }

    const token = getTokenFromCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Ошибка в перехватчике запросов:', error);
    return Promise.reject(error);
  }
);

// Функция для повторных попыток
const retryRequest = async (error, retryCount = 0) => {
  if (retryCount >= MAX_RETRIES) {
    return Promise.reject(error);
  }

  await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)));
  return client(error.config);
};

// Добавляем перехватчик ответов
client.interceptors.response.use(
  (response) => {
    console.log('Получен ответ:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });

    // Сохраняем в кэш для GET запросов
    if (response.config.method === 'get') {
      saveToCache(response.config.url, response.data);
    }

    return response;
  },
  async (error) => {
    // Обработка кэша
    if (error.__CACHE_HIT__) {
      return { data: error.data };
    }

    // Повторные попытки для сетевых ошибок
    if (!error.response && error.config) {
      return retryRequest(error);
    }

    if (error.response) {
      console.error('Ошибка с ответом от сервера:', {
        url: error.config.url,
        status: error.response.status,
        data: error.response.data
      });

      switch (error.response.status) {
        case 401:
          removeTokenCookie();
          window.location.href = '/auth';
          break;
        case 403:
          console.error('Доступ запрещен');
          break;
        case 404:
          console.error('Ресурс не найден:', error.config.url);
          break;
        case 500:
          console.error('Ошибка сервера:', error.response.data);
          break;
        default:
          console.error('Ошибка:', error.response.data);
      }
    } else if (error.request) {
      console.error('Нет ответа от сервера:', {
        url: error.config.url,
        request: error.request
      });
    } else {
      console.error('Ошибка при настройке запроса:', error.message);
    }
    return Promise.reject(error);
  }
);

export { setTokenCookie, removeTokenCookie };
export default client; 