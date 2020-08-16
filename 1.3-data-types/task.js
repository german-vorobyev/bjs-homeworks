"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (!Number(percent)) {
        console.log('Параметр percent содержит неправильное значение ' + percent + '.');
    } else if (!Number(contribution)) {
        console.log('Параметр contribution содержит неправильное значение ' + contribution + '.');
    } else if (!Number(amount)) {
        console.log('Параметр amount содержит неправильное значение ' + amount + '.');
    }
    let bodyCredit = amount - contribution;
    let nunberOfMonths = date.getMonth() - new Date().getMonth() + 12 * (date.getFullYear() - new Date().getFullYear());
    let P =  percent / 100 / 12 ;
    let payment = bodyCredit * (P + P / ((Math.pow((1+P), nunberOfMonths)) - 1));
    let totalAmount = (payment * nunberOfMonths).toFixed(2);
    console.log(totalAmount);
    return Number(totalAmount);
}

function getGreeting(name) {
    if (!name || name === 'null' || name === 'undefined') {
        console.log(`Привет, мир! Меня зовут Аноним`);
        return `Привет, мир! Меня зовут Аноним`;
    } else {
        console.log(`Привет, мир! Меня зовут ${name}`);
        return `Привет, мир! Меня зовут ${name}`;
    }
}