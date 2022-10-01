"use strict";

// function
// task 1
function sayHello(userName = "Антон") {
  let message = `Привет, ${userName}`;
  return message;
}
// task 2

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);
