'use strict';
//37. ClassList
// Экономим память браузера 
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);// узнаём количество классов в кнопке 
console.log(btns[0].classList.item(1)); // показывает название номера класса в кнопке
console.log(btns[1].classList.add('red', 'second')); // добавляет класс red
console.log(btns[0].classList.remove('blue')); // удаляет класс blue
console.log(btns[0].classList.toggle('blue')); 
// если этот класс присутсвует в элементе, то он его удаляет, 
//если отсутствует - добавляет

/* Метод - class.List.contains Если класс есть, то возвращает True, а если нет - false */

if (btns[1].classList.contains('red')) {
    console.log('red ');
}

// addEventListener - назначаеться обратотчик событий
btns[0].addEventListener('click', () => {
//  if (!btns[1].classList.contains('red')){
//      btns[1].classList.add('red');
//  }else{
//      btns[1].classList.remove('red');
//  }
btns[1].classList.toggle('red');
}); 


// classname - устарело и не стоит использовать его 

//console.log(btns[0].className);


/* Делегирований событий */

wrapper.addEventListener('click', (event) =>{
 if (event.target && event.target.tagName == "BUTTON"){
    console.log('hello');
 }
});


// Продвинутое делегирование
wrapper.addEventListener('click', (event) =>{
    if (event.target && event.target.matches('button')){
       console.log('hello');
    }
   });
   

// делегирование не работает!

/* btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        console.log('hello');
    });
}); */ 


const btn =document.createElement('button'); 
btn.classList.add('red');
wrapper.append(btn);