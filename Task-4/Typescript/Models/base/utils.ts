export const compareForFilter = <T>(mainItem: T, partItem: Partial<T>): boolean => {
    const isValid = Object.keys(partItem).every((key) => {
        const typedKey = key as keyof T;
        return partItem[typedKey] === mainItem[typedKey]; 
    });
    return isValid;
}