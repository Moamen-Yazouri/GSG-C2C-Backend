const bookFactory = () => {
    const book = {}; 
    book.title = "DSA with Java",
    book.author = "Michael T. Goodrich",
    book.isRead = false,
    book.toggleReadStatus = () => {
        book.isRead = !book.isRead
    },
    book.descripe = () => {
        return `
            DSA with Java by ${book.author}, [${this.isRead}].
        `        
    }

    return book;
}

const book = bookFactory();

book.toggleReadStatus();

console.log(book.descripe());