import { Reducer } from 'react';
import { PageActionMap } from '../action/PageAction';
import { IHeaderNavContext } from '../domain/IHeaderNavContext';
import { IAction } from '../action/index';

export type PageState = Readonly<{
    isOpen: boolean;
    drawerWidth: number;
    headerNavMenu: IHeaderNavContext;
}>;

const initialState: PageState = {
    isOpen: true,
    drawerWidth: 320,
    headerNavMenu: {
        isOpen: false,
        anchorEl: null,
        menu: null,
    },
};

export const pageReducer: Reducer<PageState, IAction> = (state = initialState, action) => {
    let newState: PageState = { ...state };

    switch (action.type) {
        case PageActionMap.OPEN_DRAWER:
            newState = {
                ...state,
                isOpen: true,
            };
            break;
        case PageActionMap.CLOSE_DRAWER:
            newState = {
                ...state,
                isOpen: false,
            };
            break;
        default:
            newState = { ...state };
            break;
    }

    return newState;
};
