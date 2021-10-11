export interface Controller<T> {
    getAll: () => Promise<T[]>;
    getById: (id: string) => Promise<T | null>
    create: (body: T) => Promise<T[]>;
    edit: (id: string, body: T) => Promise<T[]>;
    delete: (id: string) => Promise<void> | void;
}

export interface Provider<T> extends Controller<T> {
    readonly code: string;
}

export interface UserCard {
    id: string;
    name: string;
    surname: string;
    date: number;
    link: string;
}
