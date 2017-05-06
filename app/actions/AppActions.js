import { TOGGLE_DRAWER } from 'app/actions/AppActionTypes';

export function toggleDrawer(show) {
    return {
        type: TOGGLE_DRAWER,
        payload: {
            show
        }
    };
}
