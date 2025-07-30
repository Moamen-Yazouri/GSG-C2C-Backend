import { IBaseRepo, IEntity } from "./types";
import { compareForFilter } from "./utils";

class BaseRepository<T extends IEntity> implements IBaseRepo<T>  {
    private items: T[] = [];
    constructor(data: T[]) {
        this.items = data;
    }
    async getAllItems(){
        return this.items  
    };
    async getItemById(value: T["id"]){
        const item = this.items.find((i) => i.id == value);
        if(!item) {
            return null;
        }
        return item;
    };
    async createNewItem(data: T){
        this.items.push(data);
        return "Added"
    }
    async deleteItemById(id: T["id"]){
        const newItems = this.items.filter((i) => i.id !== id);
        this.items = newItems
        return "Deleted successfuly!";
    }
    async findByFilter(props: Partial<T>){
        const filtered = this.items.filter((i) => compareForFilter(i, props));
        return filtered;
    }
}
export default BaseRepository;
