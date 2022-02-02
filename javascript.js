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