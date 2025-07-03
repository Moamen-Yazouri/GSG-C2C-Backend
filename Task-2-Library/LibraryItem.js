class LibraryItem {
    static #counter = 0;
    #id;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.#id = ++LibraryItem.#counter;
    }
    descripe() {
        return `
            ${this.name} is ${this.price}$.
        `
    }

    getId() {
        return this.#id;
    }

}

export default LibraryItem;