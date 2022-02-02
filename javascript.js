'use strict';
// 49. Rest operator and default parameters (ES6)

/* Rest оператор записывается вконце аргументов как три точки ... */
/* Rest оператор собирает всё, что осталось и формирует массив */
const log = function(a, b, ...rest){
    console.log(a,b,rest);
};
log('basic','rest','operator','usage'); // 'operator' и 'usage' поместились в массив

var dir = function(a, b, c) {
    console.log(a, b, c);
  };
  
  dir(...['Spread', 'Rest', 'Operator']); // Spread Rest Operator

  function calcOrDouble(number,basis = 2){
      /* Параметр по умолчанию basis = 2 */
      console.log(number * basis);
  }
  calcOrDouble(3);

