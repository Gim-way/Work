'use strict';
//47. Classes (ES6)
/* Классы - это красивая оберта функции конструкторов */

/* Синтаксис классов */

class Rectangle {
    constructor(height,width){
        /* Свойства */
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}
/* Наследует свойства и методы extends Rectangle */
class ColorRectangleWithText extends Rectangle{
    constructor(height,width,text,bgColor){
        /* Вызвает супер конструктор родителя */
        /* Super должна быть всегда на первом месте в конструкторе */
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColorRectangleWithText(25,10,'Hello World','red');
div.showMyProps();
console.log(div.calcArea());
// const square = new Rectangle(10,10);
// const long = new Rectangle(20,100);
// console.log(long.calcArea());
// console.log(square.calcArea());