import { LOGOUT, SET_APP, SET_LOGIN_ERROR_MESSAGE } from 'app/actions/AppActionTypes';

export function logout() {
    return {
        type: LOGOUT
    };
}

export function setApp(app) {
    return {
        type: SET_APP,
        payload: {
            app
        }
    };
}

export function setLoginErrorMessage(loginErrorMessage) {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        payload: {
            loginErrorMessage
        }
    };
}
