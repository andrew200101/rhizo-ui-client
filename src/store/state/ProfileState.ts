import { Reducer } from 'redux';
import { IAction } from '../core';

// --- Action Type--- //
export const ProfileActionMap = {
    REQUEST_CREATE_USER_PROFILE: '@profile/request-create-user-profile',
    REQUEST_CREATE_USER_PROFILE_SUCCESS: '@profile/request-create-user-profile-success',
    REQUEST_CREATE_USER_PROFILE_ERROR: '@profile/request-create-user-profile-error',

    REQUEST_GET_USER_PROFILE: '@profile/request-get-user-profile',
    REQUEST_GET_USER_PROFILE_SUCCESS: '@profile/request-get-user-profile-success',
    REQUEST_GET_USER_PROFILE_ERROR: '@profile/request-get-user-profile-error',

    REQUEST_UPDATE_USER_PROFILE: '@profile/request-update-user-profile',
    REQUEST_UPDATE_USER_PROFILE_SUCCESS: '@profile/request-update-user-profile-success',
    REQUEST_UPDATE_USER_PROFILE_ERROR: '@profile/request-update-user-profile-error',

    REQUEST_CREATE_STUDENT_PROFILE: '@profile/request-create-student-profile',
    REQUEST_CREATE_STUDENT_PROFILE_SUCCESS: '@profile/request-create-student-profile-success',
    REQUEST_CREATE_STUDENT_PROFILE_ERROR: '@profile/request-create-student-profile-error',

    REQUEST_GET_STUDENT_PROFILE: '@profile/request-get-student-profile',
    REQUEST_GET_STUDENT_PROFILE_SUCCESS: '@profile/request-get-student-profile-success',
    REQUEST_GET_STUDENT_PROFILE_ERROR: '@profile/request-get-student-profile-error',

    REQUEST_UPDATE_STUDENT_PROFILE: '@profile/request-update-student-profile',
    REQUEST_UPDATE_STUDENT_PROFILE_SUCCESS: '@profile/request-update-student-profile-success',
    REQUEST_UPDATE_STUDENT_PROFILE_ERROR: '@profile/request-update-student-profile-error',

    REQUEST_CREATE_TUTOR_PROFILE: '@profile/request-create-tutor-profile',
    REQUEST_CREATE_TUTOR_PROFILE_SUCCESS: '@profile/request-create-tutor-profile-success',
    REQUEST_CREATE_TUTOR_PROFILE_ERROR: '@profile/request-create-tutor-profile-error',

    REQUEST_GET_TUTOR_PROFILE: '@profile/request-get-tutor-profile',
    REQUEST_GET_TUTOR_PROFILE_SUCCESS: '@profile/request-get-tutor-profile-success',
    REQUEST_GET_TUTOR_PROFILE_ERROR: '@profile/request-get-tutor-profile-error',

    REQUEST_UPDATE_TUTOR_PROFILE: '@profile/request-update-tutor-profile',
    REQUEST_UPDATE_TUTOR_PROFILE_SUCCESS: '@profile/request-update-tutor-profile-success',
    REQUEST_UPDATE_TUTOR_PROFILE_ERROR: '@profile/request-update-tutor-profile-error',

    RESET: '@profile/reset',
};

export type UserProfileState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data?: any;
}>;

export type StudentProfileState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data?: any;
}>;

export type TutorProfileState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data?: any;
}>;

export type ProfileState = Readonly<{
    isUserProfileCompleted?: boolean;
    isStudentProfileCompleted?: boolean;
    isTutorProfileCompleted?: boolean;
    user?: UserProfileState;
    student?: StudentProfileState;
    tutor?: TutorProfileState;
}>;

const initialState: ProfileState = {
    isUserProfileCompleted: false,
    isStudentProfileCompleted: false,
    isTutorProfileCompleted: false,
    user: null,
    student: null,
    tutor: null,
};

const userProfileReducer: Reducer<UserProfileState, IAction> = (state = initialState.user, action) => {
    let newState: UserProfileState = {};
    switch (action.type) {
        case ProfileActionMap.REQUEST_CREATE_USER_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: null,
            };
            break;

        case ProfileActionMap.REQUEST_CREATE_USER_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_CREATE_USER_PROFILE_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: null,
            };
            break;
        case ProfileActionMap.REQUEST_GET_USER_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_GET_USER_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_GET_USER_PROFILE_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;
        case ProfileActionMap.REQUEST_UPDATE_USER_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_UPDATE_USER_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_UPDATE_USER_PROFILE_ERROR:
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

const studentProfileReducer: Reducer<StudentProfileState, IAction> = (state = initialState.student, action) => {
    let newState: StudentProfileState = {};
    switch (action.type) {
        case ProfileActionMap.REQUEST_CREATE_STUDENT_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_CREATE_STUDENT_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_CREATE_STUDENT_PROFILE_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;
        case ProfileActionMap.REQUEST_GET_STUDENT_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_GET_STUDENT_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_GET_STUDENT_PROFILE_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;
        case ProfileActionMap.REQUEST_UPDATE_STUDENT_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_UPDATE_STUDENT_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_UPDATE_STUDENT_PROFILE_ERROR:
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

const tutorProfileReducer: Reducer<TutorProfileState, IAction> = (state = initialState.tutor, action) => {
    let newState: TutorProfileState = {};
    switch (action.type) {
        case ProfileActionMap.REQUEST_CREATE_TUTOR_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_CREATE_TUTOR_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_CREATE_TUTOR_PROFILE_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;
        case ProfileActionMap.REQUEST_GET_TUTOR_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_GET_TUTOR_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_GET_TUTOR_PROFILE_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;
        case ProfileActionMap.REQUEST_UPDATE_TUTOR_PROFILE:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case ProfileActionMap.REQUEST_UPDATE_TUTOR_PROFILE_SUCCESS:
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

        case ProfileActionMap.REQUEST_UPDATE_TUTOR_PROFILE_ERROR:
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

export const profileReducer: Reducer<ProfileState, IAction> = (state = initialState, action) => {
    return {
        ...state,
        user: userProfileReducer(state.user, action),
        student: studentProfileReducer(state.student, action),
        tutor: tutorProfileReducer(state.tutor, action),
    };
};
