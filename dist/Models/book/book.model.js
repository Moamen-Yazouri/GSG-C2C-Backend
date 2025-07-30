"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepo_1 = __importDefault(require("../base/BaseRepo"));
const constants_1 = require("./constants");
class BookRepo extends BaseRepo_1.default {
    constructor() {
        super(constants_1.initialBooks);
    }
}
exports.default = BookRepo;
