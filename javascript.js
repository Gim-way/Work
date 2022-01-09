"use strict";
//Условие
if (1) {
        console.log("OK!");
} else {
        console.log('Error');     
}
const num =50;

if (num < 50) {
        console.log('Error');
} else if (num > 100) {
        console.log('Mach');
}else{
        console.log('OK!');
}

// Тернарный оператор 
(num === 50 ) ?   console.log('OK!') :  console.log('Error');

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Доступ запрещён" : secondCheck ? "Доступ запрещён" : "Доступ разрешён";

console.log( access ); // выводит в консоль "Доступ разрешён"

const rum = '51';
switch (rum) {
        case '49':        
                console.log('Неверно');
                break;
        case '100':
                console.log('Неверно');
                break;
        case '50':
                console.log('В точку!');
                break;
        default:
                console.log('Не в этот раз');
                break;
}