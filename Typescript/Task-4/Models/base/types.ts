export interface IEntity {
    id: string
}


export interface IBaseRepo<T extends IEntity> {
    getAllItems: () => Promise<T[]>,
    getItemById: (value: T["id"]) => Promise<T | null>,
    createNewItem: (data: T) => Promise<string>,
    deleteItemById: (id: T["id"]) => Promise<string>,
    findByFilter: (props: Partial<T>) => Promise<T[]>,
}

