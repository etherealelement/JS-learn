let num = 20;

function showMessage(text) {
  console.log(text);
  num = 10;
}
showMessage("Hello");
console.log(num);

//
function calc(a, b) {
  return a + b;
}
console.log(calc(130, 250));
console.log(calc(200000000, 250));

//
function ret() {
  let num = 50;
  return num;
}
console.log(ret());

// function expression

const semen = function (a, b) {
  return a * b;
};
console.log(semen(50, 20));

const slaves = (a, b) => {
  return a + (b + b);
};
console.log(slaves(50, 50));

//

const fisting = 300;
const slave = 200;

function convert(fisting, slave) {
  return fisting * slave;
}
console.log(convert(fisting, 57));
console.log(convert(fisting, slave));

//  pr
// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

function sayHello(name) {
  return `Привет, ${name}`;
}
console.log(sayHello("Антон"));

//
function showNum(a, b) {}
