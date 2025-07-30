"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_model_1 = __importDefault(require("../Models/book/book.model"));
const book = new book_model_1.default();
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
