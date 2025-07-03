class Book {

    constructor (title, author, isRead) {
        this.title = title
        this.author = author
        this.isRead = isRead
    };

    toggleReadStatus () {
        this.isRead = !this.isRead
    };

    descripe () {
        return `
            ${this.title} by ${this.author}, [${this.isRead}].
        `        
    };

}

const book = new Book("DSA with Java", "Michael T. Goodrich", false);

book.toggleReadStatus();

console.log(book.descripe());