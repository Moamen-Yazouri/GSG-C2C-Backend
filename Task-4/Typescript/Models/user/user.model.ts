import BaseRepository from "../base/BaseRepo";
import { IUser } from "./types";
import { initialUsers } from "./constants";

class UserRepo extends BaseRepository<IUser> {
    constructor() {
        super(initialUsers);
    }
}

export default UserRepo;
