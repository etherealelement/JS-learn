// function
// Обьявление функции, function decloration

function name(params) {
  // тело
}

//Имя функции и её предназначение

// Как правило, в имени используются опеределенные префиксы,
// обозначающие действие, после которых следует объект действия.

// Например, функции, начинающиеся с
// "show..." обычно что-то показывают,
// "get..." – возвращают значение,
// "calc..." – что-то вычисляют,
// "create..." – что-то создают,
// "check..." – что-то проверяют и возвращают логическое
// значение, и т.д.

// Примеры:
// showMessage - показать сообщение
// getOptions - получить параметры
// calcSum - посчитать сумму
// и т.д.

// Код функции выполниться столько раз сколько произведено ее вызовов

// Вложенность функций.
// Локальные и глобальные переменные.
function showMessage() {
  let message = "Сообщение";
  console.log(message);
}

// Глобальная переменная.

let a;

function showMessage() {
  a = "Сообщение";
}
showMessage();
console.log(a);

// Глобальные переменные.

let globalVar = "Я глобальная переменная";

function getSumm() {
  let numOne, numTwo;

  function getNumOne() {
    numOne = 1;
    console.log(globalVar);
  }
  function getNumTwo() {
    numTwo = 2;
  }
  getNumOne();
  getNumTwo();
  let numSumm = numOne + numTwo;
  console.log(globalVar);
}

console.log(globalVar);
getSumm();

// Параметры (аргументы)

function calcSumm(numOne, numTwo) {
  console.log(`Число a = ${numOne}`);
  console.log(`Число б = ${numTwo}`);

  let numSumm = numOne + numTwo;
  console.log(`Сумма = ${numSumm}`);
}
calcSumm(4, 5);

// Возврат функции.

function calcSumm(One, Two) {
  let numSumm = One + Two;
  return numSumm;
}
let funcRez = calcSumm(4, 6);
console.log(`Сумма - ${funcRez}`);

// Рекурсия

function getSumm(numOne, numTwo) {
  let numSumm = calcSumm(numOne, numTwo);
  console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
  return numOne + numTwo;
}
getSumm(5, 5);

// Рекурсия пример 2
function calcSumm(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calcSumm(numOne, numTwo - 1);
  }
}
console.log(calcSumm(2, 3));
// Функциональные выражения (FunctionExpression)
let showMessge = function () {
  console.log("Hello!");
};
showMessge();

// Стрелочная функция.

let getMessage = (userInfo, userName) => {
  let userMessage = userInfo + "," + userName + "!";
  return userMessage;
};
console.log(getMessage("Hello", "Fuckin Slave"));

// DZ
// Задача №1
// Кто попадет в консоль первым Вася или Коля?
function showName() {
  console.log("Вася!");
}
setTimeout(showName, 0);
console.log("Коля!");

// Задача №2
// Верно ли вызвана функция
showMessage();
function showMessage() {
  console.log("Сообщение");
}
// Задача №3
// Верно ли вызвана функция
showMessage();
let showMessages = function () {
  console.log("Сообщение");
};
// Задача №4
// Как решить проблему?
function showMessage() {
  if (2 > 1) {
    console.log("Сообщение");
  }
}
showMessage(); // Error (showMessage is not defined)
