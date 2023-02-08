/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

1. Сделать fork данного проекта к себе в аккаунт
2. Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/


//Алгоритм решения 
//1. Найти на странице "действующие" эл-ты (те эл-ты с которыми мы будем взаимодействовать)
const carImage = document.querySelector('#img');
const colorButtons = document.querySelectorAll('.colorItem');


//2. Отслеживаем события (действия) пользователя
colorButtons.forEach(function(button) {
    button.addEventListener('click', function(event){
        //3. Пишем функции, которые сработают на действие пользователя

        //Получили доступ к цвету 
        const fileName = event.target.dataset.file;

        //Форпируем новое значение (путь директории + имя файла)
        const newSrc = 'https://webcademy.ru/files/js2020/solaris/' + fileName;

        // Устанавливаем новое изображение к определенному выбранному цвету
        carImage.src = newSrc;

        //Убираем активный класс у предыдущей кнопки
        const lastActiveButton = document.querySelector('.colorItem--active');
        lastActiveButton.classList.remove('colorItem--active');

        //Делаем активной кнопку, по которой полльзователь нажал
        //Добавляя класс colorItem--active
        event.target.classList.add('colorItem--active');
    })
});
