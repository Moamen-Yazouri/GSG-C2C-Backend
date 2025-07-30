import { IEntity } from "../base/types";

export interface IBook extends IEntity {
    title: string,
    description: string,
    author: string,
    pages: number,
    price: number,
}