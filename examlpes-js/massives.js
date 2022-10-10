const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "";
  arr.lenght === 0 ? (str = "Семья пуста") : (str = "Семья состоит из: ");

  arr.forEach((item) => {
    str += `${item} `;
  });
  return str;
}
showFamily(family);

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((items) => {
    console.log(items.toLowerCase());
  });
}
standardizeStrings(favoriteCities);

//
//
const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
reverse(someString);
//
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  arr.lenght === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты: \n");
  arr.forEach((curr, i) => {
    if (curr !== missingCurr) {
      str += `${curr} \n`;
    }
  });
  return str;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");
