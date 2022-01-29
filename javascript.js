// 40. Working with dates
'use strict';

const now = new Date('2022-01-29'); // создаём новую дату и помеппщаем в переменную now
//new Date.parse('2022-01-29'); 

/* Методы set-оры */
console.log(now.setHours(18,40)); // устанавливаем дату. Второй аргумент это минуты
console.log(now.setHours(40)); // часы перекинуться на новую дату
console.log(now);

// Методы
//getFullYear - показывает только год
//getMonth - получаем месяц, отчитываем с 0 
//getDate - получаем число
//getHours - получить часы
// и т.д
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());

console.log(now.getDay());
// getDay - получить номер дня недели, ВС будет 0 день
console.log(now.getUTCHours()); // время по UTC

console.log(now.getTimezoneOffset()); // получать разницу между часовым поесом и UTC (разница в минутах)
console.log(now.getTime()); // время в милисикундах которое прошло

let start = new Date(); // Начало работы

for (let i = 0; i < 100000; i++){
    let some = i**3;
}

let end = new Date(); // Конец работы 

alert(`Цикл отрабол за ${end-start} миллисикунд`);