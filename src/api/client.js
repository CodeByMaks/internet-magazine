import axios from 'axios';

const CACHE_TIME = 5 * 60 * 1000; // 5 минут
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const cache = new Map();

const client = axios.create({
  baseURL: import.meta.env.PROD 
    ? 'https://internet-magazine-4jwp.vercel.app/api'  // Используем текущий домен
    : 'http://localhost:3002/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
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
    // Проверяем кэш только для GET запросов
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
    return Promise.reject(error);
  }
);

// Добавляем перехватчик ответов
client.interceptors.response.use(
  (response) => {
    if (response.config.method === 'get') {
      saveToCache(response.config.url, response.data);
    }
    return response;
  },
  async (error) => {
    if (error.__CACHE_HIT__) {
      return { data: error.data };
    }

    // Обработка CORS ошибок
    if (error.message && error.message.includes('CORS')) {
      console.error('CORS ошибка:', error.message);
      return Promise.reject(new Error('Ошибка доступа к API'));
    }

    // Обработка сетевых ошибок
    if (!error.response) {
      if (error.config && error.config.retryCount < MAX_RETRIES) {
        error.config.retryCount = (error.config.retryCount || 0) + 1;
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * error.config.retryCount));
        return client(error.config);
      }
      return Promise.reject(new Error('Ошибка сети'));
    }

    // Обработка ошибок сервера
    if (error.response.status === 500) {
      return Promise.reject(new Error('Ошибка сервера'));
    }

    return Promise.reject(error);
  }
);

export { setTokenCookie, removeTokenCookie };
export default client; 