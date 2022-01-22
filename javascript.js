'use strict';
// 31. Events and their handlers

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


/* btn.onclick = function () {
    alert('Clik button');
}; 

btn.onclick = function () {
    alert('Second button');
}; */
 // Сразу выводит второй вариант  // устаревший вариант 


//Правильный вариант назначения обработчика события
// let i = 0;
const deletElement = (event) => {
   console.log(event.target);
   console.log(event.type);
   /* i++;
    if (i == 1){
        btn.removeEventListener('click', deletElement);
    } */
};

/* btn.addEventListener('click', deletElement);
overlay.addEventListener('click', deletElement); */

btns.forEach(btn => {
    btn.addEventListener('click', deletElement , {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); // отменяем переход по ссылке
    console.log(event.target); // выводим таргет элемента
});