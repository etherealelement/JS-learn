'use strict'

const slavesArr = [300, 200, 100, 50];
// slavesArr[99] = 0;  // 100 потому что индекс элемента + 1 = 100
// console.log(slavesArr.length);  //индекс элемента считается конец элемента + 1
// console.log(slavesArr);

// Метод foreach
slavesArr.forEach(
    function name(backs, i , slavesArr) { // 3 аргумента 1.pзначение агрумента внутри массива . 2. счестчик номер по порядку, 3 ссылка на массив который надо перебрать.
        console.log(`${i}: ${backs} внутри массива  ${slavesArr} `);
    }
); // работает только в виде callback функции

// методы работающие с концом массива.

slavesArr.pop();  // удаляет последний элемент массива.
console.log(slavesArr);
slavesArr.push("300$"); // добавляет элемент который будет пушиться в конец массива.
console.log(slavesArr);

// Методы перебора массива
// Цикл for 

for (let i = 0; i < slavesArr.length; i++)  {
    console.log(slavesArr[i]);
}

//  for of 

for (const fist of slavesArr) {
    console.log(fist); //выводить в консоль элемент
}

// example 

const dangeonArr = ['billy','van','slaves','jabronies'];
dangeonArr.forEach(function fuckyou(fingers, i, dangeonArr) {
    console.log(`${i}: ${fingers} внутри массива ${dangeonArr}`);
});


dangeonArr.push('fuckingslaves');
console.log(dangeonArr);

for (const i of dangeonArr) {
    console.log(i);
}

for (let i = 0; i < dangeonArr.length; i++) {
    console.log(dangeonArr[i]);
    
}

const dangeonShop = prompt("", ""); 
const dangeonProducts = dangeonShop.split(", "); // одинарные КОВЫЧКИ
dangeonProducts.sort(); //сортирует массив как строки по алфавиту
console.log(dangeonProducts.join(';')); //обьединение элементов массива

const num = [2, 6, 9, 12];
num.sort();
console.log(num);

function compareNum(a, b) { // 2 числа которые сравниваются 
    return a - b;
}

// псевдомассив - объект структура которого совпадает со структурой объекта но в нем не будет МЕТОДОВ.
