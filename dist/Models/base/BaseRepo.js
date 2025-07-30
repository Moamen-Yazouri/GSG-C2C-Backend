"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class BaseRepository {
    constructor(data) {
        this.items = [];
        this.items = data;
    }
    async getAllItems() {
        return this.items;
    }
    ;
    async getItemById(value) {
        const item = this.items.find((i) => i.id == value);
        if (!item) {
            return null;
        }
        return item;
    }
    ;
    async createNewItem(data) {
        this.items.push(data);
        return "Added";
    }
    async deleteItemById(id) {
        const newItems = this.items.filter((i) => i.id !== id);
        this.items = newItems;
        return "Deleted successfuly!";
    }
    async findByFilter(props) {
        const filtered = this.items.filter((i) => (0, utils_1.compareForFilter)(i, props));
        return filtered;
    }
}
exports.default = BaseRepository;
