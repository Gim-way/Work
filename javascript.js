// 39. Scripts and their execution time. setTimeout and setInterval
const btn = document.querySelector('.btn');
let timerId2,
    i = 0; // глобальная переменная

// Анимация перемещения куба

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0; // переменная позиции откуда будет всё стартовать и изменяться

    const id = setInterval(frame,10);
    function frame() {
        if (pos === 300){
        /* конечное значение, если будет равно 300, то останавливаем анимацию */
            clearInterval(id);
        }else{
        /* Если аниамация не закончилась */
            pos++; // начальную позицию увелициваю на еденицу
            elem.style.top = pos+'px';
            elem.style.left = pos+'px';
        }
    }
}


 btn.addEventListener('click', (myAnimation));

/*  const timerId = setTimeout( function (text){ 
     // конструкция принимает ту функцию которая будет запускаться через определенное время
     console.log(text);
 }, 2000,'Hello'); // мс через 2 скунды получаем 'Hello'
// трейти аргумент перейдет в функцию  */



/* btn.addEventListener('click', ()=>{
//const timerId2 = setTimeout( logger, 3000);
 timerId2 = setInterval( logger, 500); // будет выполняться каждые три секунды
});


function logger () {
    if (i===3){ // когда выполниться функция 3 раза, сработает
        // Сбросить setTimeout 
        clearInterval(timerId2);
    }
    console.log('text');
    i++;
} */

// Рекурсивыный вызов setTimeout

/*  let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log,500);
 },500); */