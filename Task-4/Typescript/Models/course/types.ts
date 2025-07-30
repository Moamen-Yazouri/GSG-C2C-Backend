import { IEntity } from "../base/types";

export interface ICourse extends IEntity{
    name: string,
    field: string,
    teacher: string,
    price: number,
}