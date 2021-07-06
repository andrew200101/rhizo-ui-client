import { useSelector } from 'react-redux';
import { IMenu } from '../domain/IMenu';
import { RootState } from '../reducer';

export const useMenus = () => {
    const menus: IMenu[] | undefined = useSelector<RootState, IMenu[]>((state) => state.menuState.data);
    return menus || [];
};
