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
  showAgeAndLangs: function (plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function (item) {
        str += `${item.toUpperCase()} `
    })
    
    return str;
  }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     let str = "";
//     const { exp } = plan.skills;
//     str = exp;
//     return str;
// }
// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }


//     return str;
// } showProgrammingLangs(personalPlanPeter);

