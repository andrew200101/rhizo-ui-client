import { call, put } from 'redux-saga/effects';
import { HttpService } from '../service/HttpService';
import { Api } from '../../settings/Api';
import { IAction } from '../core';
import { requestLoginSuccess, requestLoginError, requestSignUpSuccess, requestSignUpError } from '../state/AuthState';

function* loginWorker(action: IAction) {
    try {
        const response = yield call(HttpService.post, Api.login, action.payload);
        if (response.status >= 200 && response.status < 300) {
            const { data } = response;
            yield put(requestLoginSuccess(data));
        } else {
            throw response.error;
        }
    } catch (error) {
        yield put(requestLoginError(error));
    }
}

function* signUpWorker(action: IAction) {
    try {
        const response = yield call(HttpService.post, Api.signup, action.payload);
        if (response.status >= 200 && response.status < 300) {
            const { data } = response;
            yield put(requestSignUpSuccess(data));
        } else {
            throw response.error;
        }
    } catch (error) {
        yield put(requestSignUpError(error));
    }
}

export const AuthSaga = {
    loginWorker,
    signUpWorker,
};
