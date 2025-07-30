import BookRepo from "../Models/book/book.model";

const book: BookRepo = new BookRepo();

const bookTester = async () => {
  console.log("Initial Books:");
  console.log(await book.getAllItems());

  await book.createNewItem({
    id: "b4",
    title: "Refactoring",
    description: "Improving the design of existing code.",
    author: "Martin Fowler",
    pages: 450,
    price: 39.99,
  });

  await book.deleteItemById("b1");

  console.log("Books After Add/Delete:");

  console.log(await book.getAllItems());

  console.log("Filter by Author:");
  console.log(await book.findByFilter({ author: "Martin Fowler" }));
};

bookTester();
