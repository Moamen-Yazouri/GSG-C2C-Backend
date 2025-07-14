// const bookFactory = () => {
//     const book = {}; 
//     book.title = "DSA with Java",
//     book.author = "Michael T. Goodrich",
//     book.isRead = false,
//     book.toggleReadStatus = () => {
//         book.isRead = !book.isRead
//     },
//     book.descripe = () => {
//         return `
//             DSA with Java by ${book.author}, [${this.isRead}].
//         `        
//     }

//     return book;
// }

// // const b = boolFactory();

// // b.toggleReadStatus();

// // console.log(b.descripe());
// const failedTask2 = new Promise((resolve, reject) => {
//     throw new Error("🔥 Thrown error");
// });

// failedTask2.catch((error) => {
//     console.log("Handled error 2:", error.message); // 👉 🔥 Thrown error
// });


async function getAwait() {
    const p = Promise.resolve("1");
    return await p;
}
async function getWithoutAwait() {
    const p =  Promise.resolve("1");
    return p;
}

const withAwait = getAwait();
const withoutAwait = getWithoutAwait();

console.log(withAwait)
console.log(withoutAwait)

