"use strict";
// Lesson 20. Objects, object destructuring (ES6)

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border:'black',
    bg:'red'
  },
  age:28,
  surname: 'Timashov',
  makeTest: function(){
    console.log("Test");
  }
};
options.makeTest();
const {border, bg} = options.colors; // деструктуризация объектов
console.log(border);
// console.log(options["colors"]["border"]);
let counter = 0;
for (let key in options){
  if (typeof(options[key])==='object'){
    for (let i in options[key]){
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else{
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
  counter++;
  }
}
console.log(counter);

console.log(Object.keys(options).length);
