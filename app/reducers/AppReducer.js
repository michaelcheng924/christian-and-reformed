import { LOGOUT, SET_APP, SET_LOGIN_ERROR_MESSAGE, SET_SUB_APP } from 'app/actions/AppActionTypes';
import {
    deleteUser,
    getAllUsers,
    getAppData,
    login,
    loginWithToken,
    passwordResetEmail,
    signup
} from 'app/api/users';

const defaultState = {
    allUsers: [],
    app: '/',
    appData: {},
    loginErrorMessage: null,
    subApp: '',
    user: null,
    userData: {}
};

export default function usersReducer(state = defaultState, { type, payload }) {
    switch(type) {
        case LOGOUT: {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem('christianandreformed:token');
            }

            return defaultState;
        }
        case SET_APP:
            return {
                ...state,
                app: payload.app,
                subApp: '',
            };
        case SET_LOGIN_ERROR_MESSAGE:
            return {
                ...state,
                loginErrorMessage: payload.loginErrorMessage
            };
        case SET_SUB_APP:
            return {
                ...state,
                subApp: payload.subApp
            };
        case login.SUCCESS:
        case signup.SUCCESS: {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('christianandreformed:token', payload.token);
            }

            return {
                ...state,
                user: payload.user
            };
        }
        case passwordResetEmail.SUCCESS:
            return {
                ...state,
                successMessage: 'You should receive an email with instructions within the next 24 hours.'
            };
        case login.ERROR:
        case passwordResetEmail.ERROR:
        case signup.ERROR:
            return {
                ...state,
                loginErrorMessage: payload.errorMessage
            };
        case loginWithToken.SUCCESS:
            return {
                ...state,
                user: payload.user,
                appData: payload.userData
            };
        case deleteUser.SUCCESS:
            return {
                ...defaultState,
                user: state.user === 'cheng.c.mike@gmail.com' ? state.user : null,
                allUsers: payload.users
            };
        // ADMIN
        case getAllUsers.SUCCESS:
            return {
                ...state,
                allUsers: payload.users
            };
        case getAppData.SUCCESS:
            return {
                ...state,
                appData: payload.appData
            };
        default:
            return state;
    }
}
