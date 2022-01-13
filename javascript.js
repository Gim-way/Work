"use strict";
// Lesson 22. Passing by reference or by value ES6- ES9


let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
  a:5,
  b:1
};

// Передачи по ссылке

// const copy = obj; // В переменную copy кладётся ссылка на объект obj 
// copy.a = 10; // передача по ссылке
// console.log(copy);
// console.log(obj);

// как создать копии объктов, массивов и т.д
// Кланирования объекта
function copy(mainObj){
  let objCopy = {};
  let key;
  for (key in mainObj){
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c:{
      x:7,
      y:4
    }
};

const newNumbers = copy(numbers); // Создали поверхностную копию объекта

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
   d: 17,
   e: 20 
  };

  console.log(Object.assign(numbers, add)); // Добавляем к объекту новый объект
  const clone = (Object.assign({}, add));
  clone.d = 25;
  console.log(add);
  console.log(clone);


  const numbers1 = {
    a:2,
    b:5,
    c:{
      x:7,
      y:4
    }
};

const clone1 = (Object.assign({}, numbers1));
clone1.a = 5;
console.log(numbers1);
console.log(clone1);


// Создаём копию массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ываиыавпып';
console.log(newArray);
console.log(oldArray);

// Оператор разворот ES6 для массивов ES8 для объектов

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];  // оператор разворота 

console.log(internet);

function log(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7,];

log(...num);

// Spred оператор для массива

const array = ['a' , 'b'];
const clonArray = [...array]; // поверхностная копия 
clonArray[0] = 'c';
console.log(array);
console.log(clonArray);

// Spred оператор для объектов 

const q = {
  one:1,
  two:2
};

const newq = {...q}; // ES9