import LibraryItem from './LibraryItem.js';

class Book extends LibraryItem {
    #author = "";
    #readersNumber = 0;
    constructor(name, price, author) {
        super(name, price);
        this.#author = author;
    }
    
    getAuthor() {
        return this.#author;
    }

    setAuthor(newAuthor) {
        this.#author = newAuthor;
    }

    getReadersNumber() {
        return this.#readersNumber;
    }

    incrementReaders() {
        this.#readersNumber += 1;
    }

    descripe () {
        return `
            id: ${super.getId()},
            Book: ${this.name},
            created by: ${this.#author},
            price: ${this.price},
            readers: ${this.#readersNumber}
        `
    }
}


const book1 = new Book("Clean Code", 120, "Robert C. Martin");
const book2 = new Book("The Pragmatic Programmer", 100, "Andrew Hunt");
const book3 = new Book("JavaScript: The Good Parts", 80, "Douglas Crockford");
const book4 = new Book("Design Patterns", 150, "Erich Gamma");

book1.incrementReaders();
book1.incrementReaders();

book2.incrementReaders();

book4.incrementReaders();
book4.incrementReaders();
book4.incrementReaders();

console.log(book1.descripe());
console.log(book2.descripe());
console.log(book3.descripe());
console.log(book4.descripe());

