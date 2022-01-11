"use strict";
// Lesson number 17. Methods and properties of strings and numbers

const str = 'teSt';
// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";
console.log(fruit.indexOf('q')); // Если -1 то такой кусок стори небыл найден
console.log(fruit.indexOf('fruit')); // выведет , что начинается с 5 символа 

const logg = 'Hello world';
console.log(logg.slice(6,11)); // вырежет слово world
console.log(logg.slice(-5)); // будет вырезать справа налево
console.log(logg.slice(6)); // вырежет слово world
console.log(logg.substring(6, 5)); // не подерживает отрицательное значение 


//Работа с Числами 

const num = 12.2;
console.log(Math.round(num)); // Окпугление числа


const test = "12.2px";
console.log(parseInt(test)); // Получает ответ 12 , также он стал числовым
console.log(parseFloat(test)); // Получаем число 12.2 с плавающим значением 



