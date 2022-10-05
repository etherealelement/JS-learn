// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

let num = 5;

while (num <= 10) {
  console.log(num);
  num++;
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).

for (let i = 20; i >= 10; i--) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
for (let n = 0; n <= 10; n++) {
  if (n % 2 === 0) {
    console.log(n);
  }
}

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл
//   for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

let a = 2;

while (a <= 16) {
  if (a % 2 === 0) {
    a++;
    continue;
  } else {
    console.log(a);
  }
  a++;
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать
const arrayOfNumbers = [];

for (let numbers = 5; numbers <= 10; numbers++) {
  arrayOfNumbers[numbers - 5] = numbers;
}
console.log(arrayOfNumbers);

// Продвинутый уровень
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let ind = 0; ind <= arr.length; ind++) {
  result[ind] = arr[ind];
}
console.log(result);

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, "Shopping", 20, "Homework"];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    data[i] = data[i] * 2;
  } else if (typeof (data[i] === "string")) {
    data[i] = `${data[i]} - done`;
  }
}
console.log(data);

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const dataArr = [5, 10, "Shopping", 20, "Homework"];
const resultArr = [];

for (let i = 1; i <= dataArr.length; i++) {
  resultArr[i - 1] = dataArr[dataArr.length - i];
}
console.log(resultArr);
