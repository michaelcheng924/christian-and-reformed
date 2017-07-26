import { LOGOUT, SET_APP, SET_LOGIN_ERROR_MESSAGE, SET_SUB_APP } from 'app/actions/AppActionTypes';

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

export function setSubApp(subApp) {
    return {
        type: SET_SUB_APP,
        payload: {
            subApp
        }
    };
}
