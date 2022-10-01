//Задача №1
//Вывести в консоль числа от 1 до 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Задача №2
let num = 8;
while (num) {
  //Последний результат 0, верно?
  console.log(num);
  num--;
}
//Задача №3. Переписать на while
for (let num = 0; num < 3; num++) {
  console.log(`Число: ${num}`);
}

let nums = 0;

while (nums < 3) {
  nums++;
  console.log(`Число: ${nums}`);
}

//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
for (let num = 0; num < 2; num++) {
  //Цикл №2
  for (let size = 0; size < 3; size++) {
    console.log(size);
    if (size === 1) {
      break;
    }
  }
}
//
