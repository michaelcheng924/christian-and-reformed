import { SET_APP } from 'app/actions/AppActionTypes';

export function setApp(app) {
    return {
        type: SET_APP,
        payload: {
            app
        }
    };
}
