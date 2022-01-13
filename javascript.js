"use strict";
// Lesson 23. OOP basics, prototypal inheritance

let str = 'some',
    strObj = new String(str);

    // console.log(typeof(str));
    // console.log(typeof(strObj));

console.dir([1,2,3]);
console.log('5');

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function(){
    console.log('Hello');
  }
};

const jonh = Object.create(soldier);


// Устаревший формат
/* const jonh = {
  health:100
};
 */
//jonh.__proto__ = soldier;
//console.log(jonh.armor);


// Новый формат
Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();