/* eslint-disable no-return-await */
import Axios from 'axios';

export const HttpMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
};

const API_BASE_URL = './assets/data';

const request = async (method: string, path: string, headers: any, payload: any) => {
    const url = `${API_BASE_URL}/${path}`;

    switch (method) {
        case HttpMethod.GET:
            return await Axios.get(url, { headers });

        case HttpMethod.POST:
            return await Axios.post(url, payload, { headers });

        case HttpMethod.PUT:
            return await Axios.put(url, payload, { headers });

        case HttpMethod.DELETE:
            return await Axios.delete(url, { headers });

        default:
            return await Axios.get(url, { headers });
    }
};

export const HttpService = {
    request,
};
