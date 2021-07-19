/* eslint-disable no-console */
import Axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

import { Api } from '../../settings/Api';

const httpClient: AxiosInstance = Axios.create({
    baseURL: Api.baseUrl,
});

httpClient.defaults.timeout = 10000;
httpClient.defaults.headers.common['Content-Type'] = 'application/json';
httpClient.defaults.headers.common.Accept = 'application/json';

httpClient.interceptors.request.use(
    async (cnf) => {
        const config: AxiosRequestConfig = { ...cnf };
        const authToken = await localStorage.getItem('authToken');
        if (authToken) {
            // config.headers['Authorization'] = `token ${authToken}`;
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

httpClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 500) {
            // TODO
        } else if (error.response.status === 403) {
            // TODO
        } else if (error.response.status === 404) {
            // TODO
        } else if (error.response.status === 400) {
            // TODO
        } else if (error.response.status === 409) {
            // TODO
        } else if (error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/';
        }
        return Promise.reject(error);
    },
);

const request = async (url: string, method: Method, data?: any) => {
    const response = await httpClient({ url, method, data });

    return response;
};

export const HttpService = {
    request,
    get: (url) => request(url, 'GET'),
    post: (url, data) => request(url, 'POST', data),
    put: (url, data) => request(url, 'PUT', data),
    delete: (url, data) => request(url, 'DELETE', data),
};
