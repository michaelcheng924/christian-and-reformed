import { SET_APP } from 'app/actions/AppActionTypes';

const defaultState = {
    app: false
};

export default function usersReducer(state = defaultState, { type, payload }) {
    switch(type) {
        case SET_APP:
            return {
                ...state,
                app: payload.app
            };
        default:
            return state;
    }
}
