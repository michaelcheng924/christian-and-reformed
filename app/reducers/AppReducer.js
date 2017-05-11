import { LOGOUT, SET_APP, SET_LOGIN_ERROR_MESSAGE } from 'app/actions/AppActionTypes';
import { login, loginWithToken, passwordResetEmail, signup } from 'app/api/users';

const defaultState = {
    app: null,
    loginErrorMessage: null,
    user: null,
    userData: {}
};

export default function usersReducer(state = defaultState, { type, payload }) {
    switch(type) {
        case LOGOUT: {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem('reformedtoolbox:token');
            }

            return defaultState;
        }
        case SET_APP:
            return {
                ...state,
                app: payload.app
            };
        case SET_LOGIN_ERROR_MESSAGE:
            return {
                ...state,
                loginErrorMessage: payload.loginErrorMessage
            };
        case login.SUCCESS:
        case signup.SUCCESS: {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('reformedtoolbox:token', payload.token);
            }

            return {
                ...state,
                user: payload.user,
                userData: payload.userData
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
                userData: payload.userData
            };
        
        default:
            return state;
    }
}
