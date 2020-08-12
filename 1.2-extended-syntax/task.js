"use strict"
function getResult(a,b,c){
    let D = b * b - 4 * a * c;
    let x1,x2;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [x1,x2];
    } else if (D == 0) {
        x1 = -b / (2 * a);
        return [x1];
    } else if (D < 0) {
        return [];
    }
}

function getAverageMark(marks){
    if (marks.length < 1) {
        return 0;
    }
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks.length > 5) {
            marks.splice(5);
        }
    marksSum += marks[i];
    }
    let averageMark = marksSum / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    if (dateOfBirthday.getFullYear() < (new Date().getFullYear() - 18)) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;   
    }
}