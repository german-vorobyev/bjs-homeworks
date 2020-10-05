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
    if (arr1.length !== arr2.length) {
      return false;
    }
    for(let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  function memorize(fn, limit) {
    const memory = [];
    let fn2 = (...args) => {
      let fil = memory.filter(obj => compareArrays(obj.args, args));
      if (fil.length > 0) {
        return fil[0].result ;
      } else {
        let res = fn(...args);
        memory.push({args:args,result:res});
          if (memory.length > limit) {
            memory.shift();
          }
          return res;
        }
    }
    return fn2;
  }