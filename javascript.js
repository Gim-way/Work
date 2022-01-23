'use strict';
// 32. DOM Navigation
/* console.log(document.head);
console.log(document.documentElement);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode); // получить родитель div.first
console.log(document.querySelector('#current').parentNode.parentNode);// получаем ещё выше родителя div.wrapper


console.log(document.querySelector('[data-current = "3"]').previousSibling);

console.log(document.querySelector('[data-current="3"]').nextElementSibling.outerHTML); // получаем следующий элемент 
console.log(document.querySelector('#current').parentElement);// получаем элемеyn first
 */
for (let node  of document.body.childNodes){
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
