# tweet-cards

Цей додаток було створено як тестове завдання, метою якого було створити картки твітів та додати
інтерактивності при клікові на кнопку. Робота виконана з використанням зборщика Vite на React.

### Технічне завдання

##### Макет: https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiY

1. Відповідно до макету потрібно реалізувати картки юзера.
2. При клікові на кнопку Follow - текст змінюється на Following. Також змінюється колір кнопки. А до
   кількості фоловерів додається і ваш. Тобто, початкова кількість складає 100,500 фоловерів. При
   клікові на кнопку буде 100,501.
3. При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто, якщо клікнути по
   кнопці і оновити сторінку - то кнопка все рівно залишається в стані Following із відповідним
   кольором, а кількість фоловерів НЕ зменшується до початкового значення.
4. При повторному клікові на кнопку її текст та колір змінюються до початкового стану. Також
   змінюється і кількість фоловерів. Вона зменшується на 1 (100,500).
5. В коді цифра 100,500 має бути прописана одним значенням (100500). В UI - виведено через кому
   (100,500).
6. Зроби пагінацію. На одній сторінці пагінації має відображатися від 3 твітів, решта підгружатись
   при натисканні Load More.

Також створено свій персональний бекенд для розробки за допомогою UI-сервісу https://mockapi.io/, де
створено ресурс users. За допомогою конструктора ресурсу описано 12 об'єктів юзера.

##### Сайт: https://oksana-pak.github.io/tweet-cards/
