"use strict";
//Циклы

//Цикл While будет повторять пока условие будет не равно!
let num = 50;
while(num <= 55) {
        console.log(num);
        num++;
}

do { // Сделай пожалуйста что-то
        console.log(num);
        num++;
}
while (num < 55); // Проверяем условия при помощи цикла While

//Цикл For

let rum = 50;
 for ( let i = 1; i > 8; i++){
        console.log(rum);
        rum++;
}
// Цикл прирывается 
 for ( let i = 1; i < 10; i++){
       if (i === 6){
               break;
       }
       console.log(i);
}
// Значение пропускается в цикле
for ( let i = 1; i < 10; i++){
        if (i === 6){
                continue;
        }
        console.log(i);
 }
