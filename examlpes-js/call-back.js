function first() {
  //do somthing
  setTimeout(() => {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}
first();
second();

//
function learnJS(lang, callback) {
  console.log(`Я учу - ${lang}`);
  callback();
}
function done() {
  console.log("Я прошел данный урок");
}
learnJS("JavaScript", done);
//  example

const dangeon = (slaves, callback) => {
  console.log(`У меня есть немножечко ${slaves}`);
  callback();
};

const dangeonCall = () => {
  console.log("Это шикарно");
};
dangeon("53", dangeonCall);
