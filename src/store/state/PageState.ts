import { Reducer } from 'redux';
import { AppAction, IAction } from '../core';
import { IHeaderNavContext } from '../domain/IHeaderNavContext';

// --- Action Type--- //
export const PageActionMap = {
    OPEN_DRAWER: '@@page/open-drawer',
    CLOSE_DRAWER: '@@page/close-drawer',
};

// --- Action Creator --- //
export const createOpenDrawerAction = () => AppAction.create(PageActionMap.OPEN_DRAWER);

export const createCloseDrawerAction = () => AppAction.create(PageActionMap.CLOSE_DRAWER);

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
