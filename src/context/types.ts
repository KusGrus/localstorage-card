export interface Action<T> {
    type: T;
    payload?: any;
}

export enum API_ACTIONS {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    GET = 'GET',
    CREATE = 'CREATE',
    EDIT = 'EDIT',
    DELETE = 'DELETE'
}

export type HandleObj<T extends string> = {
    [key in T]: (state: any, action: Action<T>) => any;
};
