
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
};

// console.log(personalPlanPeter.skills.exp);




function showExperience(plan) {
    for (let key in personalPlanPeter) {
        if (typeof(personalPlanPeter[key])==='object') {
            for(let i = 0; i < personalPlanPeter[key]; i++){
                console.log(`Свойство ${key} имеет значение ${key[i]}`);
            }
        } else {
            console.log(`Свойство ${key} имеет значение ${personalPlanPeter[key]}`);
        }
    }
} showExperience();