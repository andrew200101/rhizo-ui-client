import { AppAction } from './index';

// --- Action Type--- //
export const PageActionMap = {
    OPEN_DRAWER: '@@page/open-drawer',
    CLOSE_DRAWER: '@@page/close-drawer',
};

// --- Action Creator --- //
export const createOpenDrawerAction = () => AppAction.create(PageActionMap.OPEN_DRAWER);

export const createCloseDrawerAction = () => AppAction.create(PageActionMap.CLOSE_DRAWER);
