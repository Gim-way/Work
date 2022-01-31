//45. Constructor Functions
/* Функция посвоей сути явлается - объектом, можно записать какие-то методы и свойства */
/* Функция будет принимать два аргумнта и уникальный идентификатор */
function User(name, id){
    this.name = name; 
    this.id = id;
    this.human = true;
    /* Можем записать методы */
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушёл`);
};
/* Наша функция стала конструктором, с её помошью можем создавть новых пользователей */
/* Прототип, от которого можем создавть новых польхователей */
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);