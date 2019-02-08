# MySite / Верстка сайта из готовых китовых элементов
MySite / Верстка сайта из готовых китовых элементов

Сайт из готового набора элементов. Учебный проект в целях освоения методологии БЭМ. Слайдеры, выпадающее меню и календарь используют JQuery и библиотеку JQueryUI. Сайт многостраничный. Главная страница - запускаем index.html из папки /public. Папка /source с исходниками используется для сборки.

GitHub Pages https://sergio-ka.github.io/MySite/

Клонирование репозитория:
git clone https://github.com/Sergio-Ka/MySite.git

Установка модулей для сборки:
npm i (или npm install)

Команды:
- разовая сборка для production: npm run build,
- сборка для разработки (с опцией -watch и без минификации js-файла сборки): npm run dev,
- сервер с live reload: npm run server, http://localhost:8080/.