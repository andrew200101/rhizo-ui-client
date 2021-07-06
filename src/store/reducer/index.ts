import { combineReducers, ReducersMapObject } from 'redux';
import { MenuState, menuReducer } from './MenuReducer';
import { PageState, pageReducer } from './PageReducer';

export type RootState = {
    menuState: MenuState;
    pageState: PageState;
};

const reducerMap: ReducersMapObject<any, any> = {
    menuState: menuReducer,
    pageState: pageReducer,
};

export default combineReducers<RootState>(reducerMap);
