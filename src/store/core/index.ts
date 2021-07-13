export interface IAction<T = any, P = any | null | undefined> {
    type: T;
    payload: P;
}

export const AppAction = {
    create: (type: string, payload?: any) => {
        if (!type) {
            throw new Error('type can not be null..');
        }
        return { type, payload };
    },
};
