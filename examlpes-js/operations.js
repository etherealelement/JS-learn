// переменные
//  Оператор сложение к строке.

const autumn = "Осень - " + "самое прекрасное " + "года.";
console.log(autumn);

// Если в выражении один из операторов строка то все выражение будет строкой

const example = "Осенью " + 90 + "дней";
console.log(typeof example);

//  Если в выражении есть математические вычисления и строки, то первыми будут вычитаться мат.вычисления.

const count = 50 + 120 + " Diamond";
console.log(count);

// Работа оператора вычетание.

const number = 50 - "12";
console.log(number);
console.log(typeof number);

// Унарный оператор сложение +

// Работа со строками, с числами.

const stroke = +"25";
console.log(typeof stroke);

// Работа с числами.

const resultTwo = +50;
console.log(resultTwo);
console.log(typeof resultTwo);

// Пример

const users = "25";
const admins = "10";
console.log(+users + +admins);
console.log(users + admins);

// Более длинный пример

console.log(Number(users) + Number(admins));

// Оператор присваивания.

let a = (12 + 5) * 2;
let b = 13 + 14 * (14 + 17);

let result = 10 * (a = b + 10 - 8);

console.log("Результат сложения a " + a);
console.log("Общий результат" + result);

// Присваивание по цепочке.

let cum = (semen = dang = 10);
console.log(cum);

// Сокращенная запись присваивания.
let c = 5;
console.log(c);
c += 3;
console.log(c);
c *= 5;
console.log(c);

// Инкеремент

let userAnswer = 2;
userAnswer++;
console.log(userAnswer);

// Декремент

let removeAnswer = 2;
removeAnswer--;
console.log(removeAnswer);

// Постфиксная форма (если нужно увеличить и при этом получить значение до увеличения нужна постфиксная форма )

let userCounter = 1;
let newUsers = userCounter--;
console.log(newUsers);

// Префиксная форма(используется если нужно тут же получить результат)

let userCount = 1;
userCount = ++userCount;
console.log(userCount);

//  Оператор запятая предоставляет нам возможность вычислять несколько выражений, разделяя их запятойю. Каждое выражение выполняется, но возращается результат только последнего.

let userNums = (2 + 3, 19 + 10);
console.log(userNums);

// Операторы сравнения(возращают логический тип данных в зависимости от значения.)
console.log(2 > 1);
console.log(2 == 3);
console.log(4 < 2);
console.log(8 != 9);

// Присваем результат переменной

let res = 25 > 23;
console.log(res);

// Операторы сравнения строк.
// Алфавитный порядок.
console.log("Б" > "А");
// Кол-во символов.
console.log("Слайдер" > "Слайд");
// Регистр
console.log("Гей" > "Гей");

// Сравнение разных типов данных
// Преобразование в число.
console.log("58" > 10);
console.log("007" == 7);
// Логическое значение true
// Если число 1 - true , 0 - false.
console.log(true == 1);
console.log(false == 0);

// Интересные ситауции.
let itemA = "0";
let itemB = 0;
console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(Boolean(itemA == itemB));

// Оператор строго равенства (Проверяет равенство без приведения типов)
console.log(false === false);
console.log("007" === 7);
console.log("58" !== 58);

// Сравнение null и undefined

// Строгое равенство
console.log(null === undefined);

// Не строгое равенство
console.log(null == undefined);
// При сравнении с undefined все будет ложью

//Оператор || (ИЛИ)

// Оператор ИЛИ, записывается как две вертикальные черты.
// Процесс его работы следующий:
// 1.	Вычисляет операнды слева направо.
// 2.	Каждый операнд конвертирует в логическое значение.
// 	Если результат true, останавливается и возвращает
// 	исходное значение этого операнда.
// 3.	Если все операнды являются ложными(false), возвращает
// 	значение последнего из них.
//

console.log(2 + 3 == 5 || 7 * 3 == 21 || 2 * 2 == 5);
console.log(2 == 5 || 3 == 7 || 8 == 5);

//Разные типы

//Первый true это 1
console.log(1 || 0);
//Первый true это true
console.log(true || "фрилансер");
//Первый true это 58
console.log(null || 58);
//Первый true это фрилансер
console.log(null || "фрилансер" || 0);
//true нет совсем, вернет последнее значение - 0
console.log(undefined || "" || null || 0);

let userName = 0;
let userNick = "Gay";

let user = userName || "" || userNick;
console.log(user);

// // Сдледующий логический оператор это И. Пишется как два
// амперсанда && выполняет следующие действия:
// 1.	Вычисляет операнды слева направо.
// 2.	Каждый операнд преобразует в логическое значение.
// 	Если результат false, останавливается и возвращает исходное
// 	значение этого операнда.
// 3.	Если все операнды были истинными, возвращает значение
// 	последнего.

//Булевые значения
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

// Оператор ??
// Возращает первый аргумент, если он не null/undefined, иначе второй.

// ДОМАШКА

// Вариант № 1

console.log("35" + -"22");
//
console.log("35" * "22");
//
console.log("558" > 22);
//
//Вариант №5
console.log((!false && 11) || (18 && !""));
//Вернет 18

//Вариант №6
let exap = 0;
console.log(exap ?? "Без имени");
