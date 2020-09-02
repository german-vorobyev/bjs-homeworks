"use srict"
// Задание 1
function parseCount(value) {
    const parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
        const err = new Error("Невалидное значение")
        throw err;
    }
    return parsed;
}
function validateCount(val) {
    let parsedValue;
    try {
        parsedValue = parseCount(val);
        return parsedValue
    } catch(err) {
        return err;
    }
}
// Задание 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || b + c < a || c + a < b) {
            const err = new Error("Треугольник с такими сторонами не существует");
            throw err;
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3);
    }
}
function getTriangle(a, b, c) {
    let triangle = {
        getPerimeter() {
            return "Ошибка! Треугольник не существует";
        },
        getArea() {
            return "Ошибка! Треугольник не существует";
        }
    }
    try {
        triangle = new Triangle(a, b, c);
        return triangle;
    } finally {
        return triangle;
    }
}