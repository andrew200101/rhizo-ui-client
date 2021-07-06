import { AppAction } from './index';

// --- Action Type--- //
export const MenuActionMap = {
    SET_MENU_LIST: '@menu/set-menu',
    REQUEST_MENU_LIST: '@menu/request-menu',
    REQUEST_MENU_LIST_SUCCESS: '@menu/request-menu-success',
    REQUEST_MENU_LIST_ERROR: '@menu/request-menu-error',
    RESET: '@menu/reset',
};

// --- Action Creator --- //
export const setMenuList = (payload) => AppAction.create(MenuActionMap.SET_MENU_LIST, payload);

export const requestMenuList = () => AppAction.create(MenuActionMap.REQUEST_MENU_LIST);

export const requestMenuListSuccess = (payload) => AppAction.create(MenuActionMap.REQUEST_MENU_LIST_SUCCESS, payload);

export const requestMenuListError = (payload) => AppAction.create(MenuActionMap.REQUEST_MENU_LIST_ERROR, payload);

export const resetMenuDataAction = () => AppAction.create(MenuActionMap.RESET);
