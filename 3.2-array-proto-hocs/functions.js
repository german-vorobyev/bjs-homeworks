"use strict"
// Задание 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    return weapons.map(item => item.name);
}
function getCountReliableWeapons(valueDurability) {
    return weapons.filter(item => item.durability > valueDurability).length;
}
function hasReliableWeapons(valueDurability) {
    return weapons.some(item => item.durability > valueDurability);
}
function getReliableWeaponsNames(valueDurability) {
    return weapons.filter(item => item.durability > valueDurability).map(item => item.name);
}
function getTotalDamage() {
    return weapons.reduce((acc, item,) => {
        return acc + item.attack;
    }, 0);
}
// Задание 2
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
  }
  function sum(...args) {
      // Замедление на половину секунды.
      sleep(100); // Можно использовать другое значение замедления.
      return args.reduce((sum, arg) => {
        return sum += +arg;
      }, 0);
  }
  function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);
  }
  function memorize(fn, limit) {
    const memory = [];
    return (...args) => {
      let fil = memory.find(obj => compareArrays(obj.args, args));
      if (fil) {
        return fil.result;
      }
        let result = fn(...args);
        memory.push({args,result});
          if (memory.length > limit) {
            memory.shift();
          }
          return result;
        }
  }