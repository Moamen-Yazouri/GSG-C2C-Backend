"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareForFilter = void 0;
const compareForFilter = (mainItem, partItem) => {
    const isValid = Object.keys(partItem).every((key) => {
        const typedKey = key;
        return partItem[typedKey] === mainItem[typedKey];
    });
    return isValid;
};
exports.compareForFilter = compareForFilter;
