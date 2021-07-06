import { Reducer } from 'react';
import { IMenu } from '../domain/IMenu';
import { MenuActionMap } from '../action/MenuAction';
import { IAction } from '../action/index';

export type MenuState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data: IMenu[];
}>;

const initialState: MenuState = {
    loading: false,
    error: null,
    success: null,
    data: [],
};

export const menuReducer: Reducer<MenuState, IAction> = (state = initialState, action) => {
    let newState: MenuState = { data: [] };

    switch (action.type) {
        case MenuActionMap.SET_MENU_LIST:
            newState = {
                ...state,
                data: [],
            };
            break;

        case MenuActionMap.REQUEST_MENU_LIST:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case MenuActionMap.REQUEST_MENU_LIST_SUCCESS:
            newState = {
                ...state,
                data: action.payload,
                loading: false,
                success: {
                    message: `success`,
                },
                error: null,
            };
            break;

        case MenuActionMap.REQUEST_MENU_LIST_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;

        default:
            newState = { ...state };
            break;
    }

    return newState;
};
