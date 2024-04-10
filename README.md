# Тестовое для задание для компании LeadHit

[Деплой](https://endless1ve.github.io/Lead-Hit/#/)

<details>
<summary>Открыть</summary>

## Описание тестового задания:

Создать приложение с помощью Vue-CLI. В приложении должны использоваться библиотеки vue-router и vuex. С помощью vue-router создать две страницы:

- Страница “Авторизация”
- Страница “Аналитика”

Все страницы необходимо оформить в одном стиле на ваш вкус. Для оформления можно использовать любые библиотеки.

### **Страница “Авторизация”**

На странице “Авторизация” должны быть - заголовок с текстом “LeadHit” и форма.
Форма должна содержать одно поле и кнопку.
Поле необходимо для ввода “id сайта”.
Кнопка должна содержать текст - “Войти”. При нажатии кнопки необходимо:

1. Проверить, что длина значения, введенного в поле, равна 24 символам. Если значение не соответствует условию отображать ошибку с текстом: “id сайта должен содержать 24 символа”. Скрывать ошибку при вводе значения в поле.
2. Если значение соответствует условию, делать HTTP запрос. Запрос можно реализовать через стандартные методы или подключив какую-либо библиотеку на ваш выбор. Запрос необходимо выполнить со следующими данными:

- URL: https://track-api.leadhit.io/client/test_auth
- метод GET
- Headers:
  - Api-Key
  - Leadhit-Site-Id

Заголовок Leadhit-Site-Id необходимо брать из поля формы.
В случае получения ответа "message": "ok", сохранять в localStorage ключ - ‘leadhit-site-id’, после чего перенаправлять пользователя на страницу “Аналитика”.

### **Страница “Аналитика”**

На странице “Аналитика” необходимо отобразить:

- заголовок страницы - “Аналитика”;
- заголовок графика - “Аналитика по визитам”;
- график визитов;

График должен состоять из двух осей:

- на оси x должно отображаться время (данные для этой оси должны быть взяты из ключа “date” объектов массива, приведенного ниже);
- на оси y должны отображаться визиты (данные для этой оси должны быть взяты из ключа “visits” объектов массива, приведенного ниже);

При наведении на точки пересечения осей желательно отображать дату и количество визитов конкретно для этой точки.
Для отображения графика использовать [библиотеку](https://www.amcharts.com/)

При переходе на страницу “Аналитика” по ссылке, отслеживать наличие в localStorage ключа - ‘leadhit-site-id’, и в случае его отсутствия перенаправлять пользователя на страницу “Авторизация”.

</details>

## Настройка проекта

```

npm install

```

### Компиляция для разработки

```

npm run serve

```

### Компиляция для продакшена

```

npm run build

```

### Линт и фикс файлов

```

npm run lint

```
