"use strict"
// Задание 1
function getSolutions( a, b, c ) {
    let D =  b * b - 4 * a * c;
    let x1,x2;
    if (D < 0) {
        return {
            D,
            roots: []
        }
    } else if (D == 0) {
        x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        }
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2] 
        }
    }
}
function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
      console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }
}
//Задание 2
function getAverageScore(data) { 
    let result = {};
    for (let key in data) {
        result[key] = getAverageMark(data[key]);
    } 
    result.average = getAverageMark(Object.values(result)); 
    return result;
}
function getAverageMark(marks) {
    if (marks.length === 0) {
    return 0;
}
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;      
}
//Задание 3
function getPersonData(secretData) {
    let result = {};
     for (let value in secretData) {
        result[value] = getDecodedValue(secretData[value]);
    }
    return {firstName: result.aaa,lastName: result.bbb};
}
function getDecodedValue(secret) {
    if (secret == 1) {
        return 'Эмильо';
    } else if (secret == 0) {
        return 'Родриго';
    }
}