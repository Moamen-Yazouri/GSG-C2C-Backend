"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../Models/user/user.model"));
const user = new user_model_1.default();
const userTester = async () => {
    console.log("initial users!");
    console.log(await user.getAllItems());
    await user.createNewItem({
        id: String(user.getAllItems.length + 1),
        name: "Moamen",
        email: "moamen@outlook.com",
        age: 21,
        role: "admin",
    });
    await user.deleteItemById("u1");
    console.log("users after deletion!");
    console.log(await user.getAllItems());
    console.log("filter by name");
    console.log(await user.findByFilter({ name: "Moamen" }));
};
userTester();
