"use srict"
// Задание 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
        return this.state;
    }
    set state(_state) {
        if (_state < 0) {
            this._state = 0;
        } else if (_state > 100) {
            this._state = 100;
        } else {
            this._state = _state;
        }
    }
    get state() {
        return this._state;
    } 
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book"
    }
}
class NovelBook extends Book {
    constructor(author, name,releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name,releaseDate, pagesCount) {
        super(author, name,releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name,releaseDate, pagesCount) {
        super(author, name,releaseDate, pagesCount);
        this.type = "detective";
    }
}
// Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i]
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        let book = this.books.findIndex(itemBooks => itemBooks.name == bookName);
        if (book === -1) {
          return null;
        } else {
            return this.books.splice(book, 1).pop();
        }
    }
}
// Задание 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.object = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (!this.object.subject) {
          this.object.subject = [];
          if (grade > 0 && grade < 6) {
            this.object.subject.push(grade)
          } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
          }
        } else {
          if (grade > 0 && grade < 6) {
            this.object.subject.push(grade)
          } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
          }
        }
        return this.object.subject.length;
    }
    getAverageBySubject(subject) {
        if (subject.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < subject.length; i++) {
            sum += subject[i];
        }
        return sum / subject.length;
    }
}
