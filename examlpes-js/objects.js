const dangeonDB = {
  slaves: "danil",
  jabronies: 7,
  fuckingSlaves: 300,
  masters: {
    billy: "Aniki",
    van: "vanDarkHolm",
  },
};

console.log(dangeonDB.masters);
delete dangeonDB.fuckingSlaves;
console.log(dangeonDB);

for (const key in dangeonDB) {
  if (typeof dangeonDB[key] === "object") {
    for (let i in dangeonDB[key]) {
      console.log(`Свойство - ${i} имеет значение - ${dangeonDB[key][i]}`);
    }
  } else {
    console.log(`Свойство - ${key} имеет значение - ${dangeonDB[key]}`);
  }
}

//  example

const gymDB = {
  slaves: 1,
  jabronies: 2,
  masters: {
    mastersFull: "Aniki",
    mastersDangeon: "Van",
  },
  bosses: {
    bossOfTheGym: "Billy",
    dangeonMasters: "VanDarkHolme",
  },
};
console.log(gymDB.slaves);

let counter = 0;
for (const key in gymDB) {
  if (typeof gymDB[key] === "object") {
    for (const i in gymDB[key]) {
      console.log(
        `Заныкались в fisting room ${i} такие перцы как ${gymDB[key][i]}`,
        counter++
      );
    }
  } else {
    console.log(`Поситители ${key} в данжион ${gymDB[key]}`);
    counter++;
  }
}
console.log(counter);

// Методы объектов
const fuckinSlave = {
  jabronies: "3",
  slaves: 2,
  masters: {
    bossofGym: "Aniki",
    dangeonMasters: "VanDarkHolme",
  },
  makeSlaves: function () {
    console.log("Fuck YOU!!!!");
  },
};
fuckinSlave.makeSlaves();
console.log(Object.keys(fuckinSlave));
const { bossofGym, dangeonMasters } = fuckinSlave.masters;
console.log(bossofGym);
