/* eslint-disable no-return-await */
import Axios from 'axios';
import { Api } from '../../settings/Api';

export const HttpMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
};

const basicHeaders = {
    'Content-Type': 'application/json',
};

const getAuthToken = async () => {
    const authToken = await localStorage.getItem('authToken');

    return authToken ? { Authorization: `Bearer ${authToken}` } : null;
};

export const HttpHeader = {
    basic: () => basicHeaders,
    jwt: async () => {
        const auth = await getAuthToken();
        return {
            ...basicHeaders,
            ...auth,
        };
    },
};

const request = async (method: string, path: string, payload?: any) => {
    const url = `${Api.baseUrl}/${path}`;
    const headers = await HttpHeader.jwt();
    let response;

    switch (method) {
        case HttpMethod.GET:
            response = await Axios.get(url, { headers });
            break;
        case HttpMethod.POST:
            response = await Axios.post(url, payload, { headers });
            break;
        case HttpMethod.PUT:
            response = await Axios.put(url, payload, { headers });
            break;
        case HttpMethod.DELETE:
            response = await Axios.delete(url, { headers });
            break;
        default:
            response = await Axios.get(url, { headers });
            break;
    }

    return response;
};

export const HttpService = {
    request,
    get: (path) => request(HttpMethod.GET, path),
    post: (path, payload) => request(HttpMethod.GET, path, payload),
    put: (path, payload) => request(HttpMethod.GET, path, payload),
    delete: (path, payload) => request(HttpMethod.GET, path, payload),
};
