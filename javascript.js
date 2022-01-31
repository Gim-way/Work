'use strict';
//46. Call context. This
/* Функция может вызываться 4-мя способами и в каждой контекст вызова отличается */
/* Первый метод - это просто вызов нашей функции */

function showThis(a, b) {
    console.log(this); /* This будет ссылаться на глобальный объет Window */
    function sum() {
        return a + b;
    }

    console.log(sum());
}
showThis(4,7);
/* Обычная функция : This - window, но если стоит 'use strict', то будет undefined */

/* Второй способ вызова функций */
/* Если мы используем метод внутри объекта,то контекст вызова будет ссылаться на этот  */
const obj = {
    /* Свойства */
    a: 20,
    b: 15,
    /* Метод */
    sum: function () {
        console.log(this);
    }
};
/* Вызываем метод */
obj.sum();

/* Третий способ - через операотр New */
/* Когда функция будет вызвона, она создаст новый объект */
function User(name, id) {
    this.name = name; // Свойства которые обращаются к this
    this.id = id;
    this.human = true;
    /* Метод */
    this.hello = function () {
        console.log('Hello!' + this.name);
    };
}

let ivan = new User('Ivan',23);
/* This в конструкторах и классах - это новый экземпляр объекта*/
/* Четверый способ - это ручное присваение this, любой функции  */

function sayName(surname) {
    console.log(this); // Получим контест вызова
    console.log(this.name + surname); 
}

const user ={
    name: 'John',
};
/* Метод Call  */
sayName.call(user, 'Smith'); // Использует данные объекта в функции
/* Метод apply */
sayName.apply(user, ['Smith'] );
/* Метод bind создает новую функцию связанную с определенным контексом*/

function count(num) {
    return this*num;
}

const double = count.bind(2); // два переходит в this
console.log(double(3)); // num перается цифра 3
console.log(double(13));

const btn = document.querySelector('.btn');
/* На кнопку привязваем обработчик событий */
btn.addEventListener('click',function(){
    /* Чему будет равен контекст this, если мы применем его на нашем элементе */
    console.log(this);
    // контекстом вызова будет сам элемент на котором произошло событие
    this.style.backgroundColor = 'red'; // поменяем цвет вызова на красный
    /* Когда Function() будет имеено записан вот так */
});

/*This , будет тоже саммое, что и e.target  */

// btn.addEventListener('click',(e) =>{
//     /* Чему будет равен контекст this, если мы применем его на нашем элементе */
//     e.target.style.backgroundColor = 'red'; 
//     /* Когда Function() будет имеено записан вот так */
// });

/* У стрелочной функции нет своего контекста вызова, будет брать у своего родителя */

const objnum = {
    num: 5,
    sayNumber: function(){
        const say = () =>{
        /* Так как мы здесь используем стрелочную функцию, у него нет своего контекста вызова, она берет свой контекст у родителя */
            console.log(this); // this будет ссылаться на объект
            console.log(this.num); // Получим 5, только при стелочной функици, при обчной функции получим undefined
        };

        say();
    }
};

objnum.sayNumber();

const doubleNum = a => a*2;
/* Если действие помещается в одну строку, то можно вынести вот таким образом,Retern ставить ненужно*/
console.log(double(4));