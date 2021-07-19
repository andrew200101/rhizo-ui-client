import { takeLatest } from 'redux-saga/effects';
import { MenuActionMap } from '../state/MenuState';
import { MenuSaga } from './MenuSaga';
import { AuthActionMap } from '../state/AuthState';
import { AuthSaga } from './AuthSaga';

export function* SagaWatcher() {
    yield takeLatest(AuthActionMap.REQUEST_LOGIN, AuthSaga.loginWorker);
    yield takeLatest(MenuActionMap.REQUEST_MENU_LIST, MenuSaga.GetMenuWorker);
}
