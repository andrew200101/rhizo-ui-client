import { call, put } from 'redux-saga/effects';
import { IMenu } from '../domain/IMenu';
import { MenuService } from '../service/MenuService';
import { requestMenuListSuccess, requestMenuListError } from '../action/MenuAction';
import { ArrayUtil } from '../../util/array-util/index';

export const refineMenuData = (menuData) => {
    let list: IMenu[] = [];

    if (menuData) {
        const map = ArrayUtil.toNodeMap([...menuData]);
        list = ArrayUtil.toNodeList(map) || [];
    }

    return list;
};

function* GetMenuWorker(action) {
    try {
        const response = yield call(MenuService.GetMenuList);
        if (response.status >= 200 && response.status < 300) {
            const { data } = response;
            const menus = refineMenuData(data);
            yield put(requestMenuListSuccess(menus));
        } else {
            throw response.error;
        }
    } catch (error) {
        yield put(requestMenuListError(error));
    }
}

export const MenuSaga = {
    GetMenuWorker,
};
