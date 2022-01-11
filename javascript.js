"use strict";
// Lesson number 16. Functions
let num = 20;
function showFistMessage(text){
        console.log(text);
        console.log(num);
}

showFistMessage('Hello World!');
console.log(num);

// console.log(calc(4,3));
// console.log(calc(5,8));
// console.log(calc(10,3));
// console.log(calc(5,10));

// function calc (a, b) {
//         return (a + b); // окончание функции 
// }
// Function Declaration
function ret () {
        let num = 50;
        return num;
}
const anotherNum = ret();
console.log(anotherNum);

// Function Expression
const logger = function() {
        console.log('Hello')
};
logger();

//Стрелочная функция

const calc = (a, b) => { 
        console.log('1');
        return a + b;
};
