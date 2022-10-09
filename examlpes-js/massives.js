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
const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }

  return str.split("").reverse().join("");
}
