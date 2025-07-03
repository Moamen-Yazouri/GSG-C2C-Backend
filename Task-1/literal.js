const book = {
    title: "DSA with Java",
    author: "Michael T. Goodrich",
    isRead: false,
    toggleReadStatus: () => {
        this.isRead = !this.isRead
    },
    descripe: () => {
        return `
            DSA with Java by ${book.author}, [${this.isRead}].
        `        
    }
}

book.toggleReadStatus();
 console.log(book.descripe());