'use strict';
//34. Events on mobile devices
// 1 touchstart - коснулись пальцем
// 2 touchmove - прикосновение с движением
// 3 touchend - когда палец убираеться 
// 4 touchenter - когда ведём пальцем по экрану и наскакиваем на элемент
// 5 touchleave - ушёл за пределы этого элемента 
// 6 touchcancel - когда точка соприкосновения не регистрирует

// Обработчик событий, чтобы сначало отобразились DOM узлы 
window.addEventListener('DOMContentLoaded', () =>{

    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (event) => {
        event.preventDefault(); // отменяем стандартные дествия браузера 
        console.log('Start');
        console.log(event.targetTouches);

    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault(); // отменяем стандартные дествия браузера 
        console.log(event.targetTouches[0].pageX);

    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault(); // отменяем стандартные дествия браузера 
        console.log('end');

    });
});

// touches - свойство выдает список всех пальцев которые сейчас взаимодейсвуют с экраном
// targetTouches - все пальцы взаимодействуют с этим элементом
// changedTouches - список пальцев участвующих в текущем событии

