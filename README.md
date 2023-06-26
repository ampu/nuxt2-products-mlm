# Тестовое задание для Vue.js разработчика в MLM-Soft

## Задача
Написать приложение(vue.js ^2 можно использовать Nuxt), которое содержит три страницы:
- страница со списком категорий и продуктов
- страница продукта
- страница корзины
-
### Данные
Данные магазина нужно брать, с помощью [Ecwid REST API](https://api-docs.ecwid.com/reference/rest-api)

Проще всего использовать демо-магазин, данные такие:
- StoreID: 58958138
- Token: public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD

### Страница «Список продуктов и категорий»
Страница содержит список товаров и категорий в любом удобном виде: сетка, список, таблица.
Данные для отображения категории:
- название категории
- изображение категории

Данные для отображения товара:
- название товара
- цена товара
- изображение товара
- кнопка «Купить»

#### Переход на детали категории
При нажатии на категорию приложение переходит на страницу с подкатегориями и товарами, принадлежащими этой категории.

#### Переход на детали товара
При нажатии на товар приложение переходит на страницу «Детали товара».

### Страница «Детали товара»
Страница содержит детали о товаре:
- названием товара
- описание товара
- изображение товара
- цена товара
- кнопка «Купить»
-
### Кнопка «Купить»
Кнопка добавляет товар в «корзину»
Корзина - любое локальное хранилище со списком добавленных товаров.

### Иконка «Корзина»
На всех страница отображается иконка корзины с количеством товаров, добавленных в нее. При нажатии на иконку приложение переходит на страницу «Корзина»

### Страница «Корзина»
Страница содержит список добавленных товаров и кнопку «Оформить заказ».
Любой товар в списке можно удалить по нажатию на кнопку «Удалить».

### Переход по страницам
Состояние страницы отображается в url'е. При переходе по url'е отображается та страница, которая принадлежит этой url'е.

### Кнопка «Оформить заказ»
При нажатии на кнопку показывается текст с поздравлением о покупке.

##  Технологии
- VueJS
- HTML/SCSS

## Дизайн
Использовать Vuetify
