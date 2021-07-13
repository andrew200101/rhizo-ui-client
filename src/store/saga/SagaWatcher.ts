import { takeLatest } from 'redux-saga/effects';
import { MenuActionMap } from '../state/MenuState';
import { MenuSaga } from './MenuSaga';

export function* SagaWatcher() {
    yield takeLatest(MenuActionMap.REQUEST_MENU_LIST, MenuSaga.GetMenuWorker);
}
