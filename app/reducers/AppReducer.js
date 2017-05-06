import { TOGGLE_DRAWER } from 'app/actions/AppActionTypes';

const defaultState = {
    drawerOpen: false
};

export default function usersReducer(state = defaultState, { type, payload }) {
    switch(type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                drawerOpen: payload.show
            };
        default:
            return state;
    }
}
