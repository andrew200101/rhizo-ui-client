import { Reducer } from 'redux';
import { IAction, AppAction } from '../core';
import { IMenu } from '../domain/IMenu';

// --- Action Type--- //
export const AuthActionMap = {
    REQUEST_LOGIN: '@auth/request-login',
    REQUEST_LOGIN_SUCCESS: '@auth/request-login-success',
    REQUEST_LOGIN_ERROR: '@auth/request-login-error',

    REQUEST_SIGN_UP: '@auth/request-sign-up',
    REQUEST_SIGN_UP_SUCCESS: '@auth/request-sign-up-success',
    REQUEST_SIGN_UP_ERROR: '@auth/request-sign-up-error',

    RESET: '@auth/reset',
};

// --- Action Creator --- //

export const requestLogin = (payload) => AppAction.create(AuthActionMap.REQUEST_LOGIN, payload);
export const requestLoginSuccess = (payload) => AppAction.create(AuthActionMap.REQUEST_LOGIN_SUCCESS, payload);
export const requestLoginError = (payload) => AppAction.create(AuthActionMap.REQUEST_LOGIN_ERROR, payload);
export const requestSignUp = (payload) => AppAction.create(AuthActionMap.REQUEST_SIGN_UP, payload);
export const requestSignUpSuccess = (payload) => AppAction.create(AuthActionMap.REQUEST_SIGN_UP_SUCCESS, payload);
export const requestSignUpError = (payload) => AppAction.create(AuthActionMap.REQUEST_SIGN_UP_ERROR, payload);
export const reset = () => AppAction.create(AuthActionMap.RESET);

export type AuthState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data: IMenu[];
}>;

const initialState: AuthState = {
    loading: false,
    error: null,
    success: null,
    data: [],
};

export const authReducer: Reducer<AuthState, IAction> = (state = initialState, action) => {
    let newState: AuthState = { data: [] };

    switch (action.type) {
        case AuthActionMap.REQUEST_LOGIN:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case AuthActionMap.REQUEST_LOGIN_SUCCESS:
            newState = {
                ...state,
                data: action.payload,
                loading: false,
                success: {
                    message: `success`,
                },
                error: null,
            };
            break;

        case AuthActionMap.REQUEST_LOGIN_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;

        case AuthActionMap.REQUEST_SIGN_UP:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case AuthActionMap.REQUEST_SIGN_UP_SUCCESS:
            newState = {
                ...state,
                data: action.payload,
                loading: false,
                success: {
                    message: `success`,
                },
                error: null,
            };
            break;

        case AuthActionMap.REQUEST_SIGN_UP_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;

        default:
            newState = { ...state };
            break;
    }

    return newState;
};
