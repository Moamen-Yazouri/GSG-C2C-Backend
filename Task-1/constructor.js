function Book () {
    this.title = "DSA with Java",
    this.author = "Michael T. Goodrich",
    this.isRead = false,
    this.toggleReadStatus = () => {
        this.isRead = !this.isRead
    },
    this.descripe = () => {
        return `
            DSA with Java by ${this.author}, [${this.isRead}].
        `        
    }
}

const book = new Book();
book.toggleReadStatus();
console.log(book.descripe());
