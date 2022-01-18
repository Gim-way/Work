'use strict';
// 28. Getting elements from the page

const box = document.getElementById('box');
console.log(box);
 const btns = document.getElementsByTagName('button'); // в переменную btns плучили псевдомасссив
 console.log(btns[0]);

 const circles = document.getElementsByClassName('circle');

 console.log(circles);


 // Современные методы

 const hearts = document.querySelectorAll('.heart');
hearts.forEach(item =>  {
    console.log(item);
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);