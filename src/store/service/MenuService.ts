import Axios from 'axios';

const API_BASE_URL = './assets/data';

const GetMenuList = async () => {
    const headers = {
        'Content-Type': 'application/json',
    };
    const url = `${API_BASE_URL}/menu-data.json`;

    return Axios.get(url, { headers });
};

export const MenuService = {
    GetMenuList,
};
