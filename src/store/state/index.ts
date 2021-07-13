import { combineReducers, ReducersMapObject } from 'redux';
import { AuthState, authReducer } from './AuthState';
import { menuReducer, MenuState } from './MenuState';
import { PageState, pageReducer } from './PageState';

export type RootState = {
    menuState: MenuState;
    pageState: PageState;
    authState: AuthState;
};

const reducerMap: ReducersMapObject<any, any> = {
    menuState: menuReducer,
    pageState: pageReducer,
    authState: authReducer,
};

export default combineReducers<RootState>(reducerMap);
