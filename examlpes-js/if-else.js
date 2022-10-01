/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

//Вариант №1
if (1 === "1") {
  console.log("Истина!");
} else {
  console.log("Ложь!");
}
//Вариант №2
if (5 == "5") {
  console.log("Истина!");
} else {
  console.log("Ложь!");
}
//Вариант №3
let message = 92 > "11" && 58 < 100 ? "Истина!" : "Ложь!";
console.log(message);

//Вариант №4
if (0) {
  console.log("Ложь!");
} else if (" ") {
  console.log("Истина!");
}
