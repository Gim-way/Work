'use strict';
// 29. Actions with messages on the page

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// inLine стили всегда будут в приоритете 
// box.style.backgroundColor = 'blue';
// box.style.width = '500px ';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
btns[1].style.height =  '80px';

// Поменять во всех элементах свойства background
// for (let i = 0; i< circles.length;i++) {
//     circles[i].style.backgroundColor = 'red';
// }

// for (let i = 0; i<h1 hearts.length;i++) {
//     hearts[i].style.cssText = 'background-color: black; height: 80px;';

// }

// Существуют специальные перебирающие методы 

hearts.forEach(item => {
    item.style.cssText = 'background-color: black; height: 80px;';
});


const div = document.createElement('div'); // Элемент создан только в  JS
const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);
// document.body.appendChild(div); - старый формат

 wrapper.append(div); // встать в конец объекта    
//wrapper.prepend(div); // вставть в начале объекта
// hearts[1].before(div); // перед
// hearts[0].after(div); // после

//wrapper.insertBefore(div, hearts[0] ); //-вставляю перд первым элементом, устаревший формат

//circles[0].remove(); удалить элемент
//wrapper.removeChild(hearts[1]); // старый фомат удаления

circles[0].style.backgroundColor = 'red';
hearts[0].replaceWith(circles[0]); // заменить один элемент на другой 

//wrapper.replaceChild(circles[0], hearts [0]); // старый формат замены

// Ректактирование элемента

div.innerHTML = '<h1>Hello World</h1>'   ; // 1 способ
//div.textContent = 'Hello'; // 2 способ, работает только с текстом
 div.style.width = '300px';

div.insertAdjacentHTML('afterend','<h2>Hello</h2>'); // 

