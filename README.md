# Интернет-магазин на React

Современный интернет-магазин, построенный с использованием React, TypeScript и Vite.

## Особенности

- 🛍️ Каталог товаров с фильтрацией и поиском
- 👤 Авторизация и регистрация пользователей
- 🛒 Корзина покупок
- ❤️ Список желаний
- 👨‍💼 Административная панель
- 📱 Адаптивный дизайн
- 🎨 Современный UI с использованием SVG иконок
- 🚀 Оптимизирован для деплоя на Vercel

## Технологии

- React 18
- TypeScript
- Vite
- Redux Toolkit
- React Router
- Styled Components
- Framer Motion
- JSON Server (для моковых данных)

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/internet-magazin.git
cd internet-magazin
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

4. В отдельном терминале запустите JSON Server для моковых данных:
```bash
npm run server
```

## Деплой на Vercel

1. Создайте аккаунт на [Vercel](https://vercel.com)
2. Подключите ваш GitHub репозиторий
3. Настройте переменные окружения (если необходимо)
4. Нажмите "Deploy"

## Структура проекта

```
src/
  ├── components/     # Переиспользуемые компоненты
  ├── pages/         # Страницы приложения
  ├── styles/        # Глобальные стили
  ├── types/         # TypeScript типы
  ├── data/          # Моковые данные
  └── App.tsx        # Корневой компонент
```

## Скрипты

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка проекта
- `npm run preview` - Предпросмотр собранного проекта
- `npm run server` - Запуск JSON Server
- `npm run lint` - Проверка кода линтером

## Лицензия

MIT
