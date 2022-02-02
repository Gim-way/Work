'use strict';
// 51. JSON

const persone = {
    name:'Alex',
    tel:'+7234234234',
    parents:{
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone));
/* Получим {"name":"Alex","tel":"+7234234234"}
и можем отправитьна сервер именно вот в таком формате */

/* С сервера приходит JSON и нужно привратить в обчный объект */

/* JSON.parse */
console.log(JSON.parse(JSON.stringify(persone)));
/* Получаем обратно обычный объект - { name: 'Alex', tel: '+7234234234' } */

/* Глубокая копия объекта */

const clone = JSON.parse(JSON.stringify(persone));
/* JSON.stringify(persone) - превратит его в JSON, потом обратоно превратит его в объект и поместит его в переменную clone*/
/* Будет слоздан глубоккий clone */
clone.parents.dad = 'Nike';
console.log(persone);
console.log(clone);

let obj = {
    a: 1,
    b: 2,
    second:{
        c:2,
        v:8
    }
  };
  let objCopy = Object.assign({}, obj);
  objCopy.second.c = '99';
  console.log(obj);
  console.log(objCopy);
/* { a: 1, b: 2, second: { c: '99', v: 8 } }
{ a: 1, b: 2, second: { c: '99', v: 8 } } */
/* Oblect.assign делает только поверхностую копию */


let someObj = {
    a: 2,
  };
  
  let obj1 = Object.create(someObj, { 
    b: {
      value: 2,  
    },
    c: {
      value: 3,
      enumerable: true,  
    },
  });
  
  let objCopy1 = Object.assign({}, obj);
  console.log(objCopy);