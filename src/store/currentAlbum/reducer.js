import {SET_ALBUM} from './actions';

const defaultState = {
    userId: '',
    id: '',
    title: '',
};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ALBUM:
            return {
                ...state,
                userId: action.payload.userId,
                id: action.payload.id,
                title: action.payload.title,
            }

        default:
            return state;
    }
}
