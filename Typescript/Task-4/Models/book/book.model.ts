import BaseRepository from "../base/BaseRepo";
import { IBook } from "./types";
import { initialBooks } from "./constants";

class BookRepo extends BaseRepository<IBook> {
    constructor() {
        super(initialBooks);
    }
}

export default BookRepo;
