const products = [
  {
    "id": 1,
    "name": "Смартфон iPhone 13",
    "description": "Новейший смартфон от Apple с отличной камерой и производительностью",
    "price": 79990,
    "category": "Электроника",
    "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656712882661",
    "stock": 10,
    "rating": 4.8,
    "details": {
      "Процессор": "A15 Bionic",
      "Дисплей": "6.1-дюймовый Super Retina XDR",
      "Система камер": "Двойная 12 МП",
      "Аккумулятор": "До 19 часов воспроизведения видео",
      "Особенности": ["Поддержка 5G", "Ceramic Shield", "Ночной режим для всех камер"]
    }
  },
  {
    "id": 2,
    "name": "Ноутбук MacBook Pro",
    "description": "Мощный ноутбук для профессионалов",
    "price": 129990,
    "category": "Электроника",
    "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673202",
    "stock": 5,
    "rating": 4.9
  }
];

const categories = [
  {
    "id": 1,
    "name": "Электроника",
    "description": "Современная электроника и гаджеты"
  },
  {
    "id": 2,
    "name": "Одежда",
    "description": "Модная одежда и аксессуары"
  },
  {
    "id": 3,
    "name": "Книги",
    "description": "Художественная и научная литература"
  }
];

module.exports = {
  products,
  categories
}; 