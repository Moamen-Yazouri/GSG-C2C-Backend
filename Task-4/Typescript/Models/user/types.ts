import { IEntity } from "../base/types";

export type ERole = "admin" | "user" | "moderator"
export interface IUser extends IEntity {
    name: string,
    email: string,
    age: number,
    role: ERole,
}