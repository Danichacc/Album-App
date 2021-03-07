import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    TOKEN_ALBUMS,
    TOKEN_PHOTOS,
    TOKEN_USERS
} from './actions';

const defaultState = {
    users: [],
    albums: [],
    photos: [],
    isFetching: false,
};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
            }

        case FETCH_DATA_SUCCESS:
            if (action.payload.url === TOKEN_USERS) {
                return {
                    ...state,
                    isFetching: false,
                    users: action.payload.data,
                }
            } else if (action.payload.url === TOKEN_ALBUMS) {
                return {
                    ...state,
                    isFetching: false,
                    albums: action.payload.data,
                }
            } else if (action.payload.url === TOKEN_PHOTOS) {
                return {
                    ...state,
                    isFetching: false,
                    photos: action.payload.data,
                }
            } else return state;

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
            }

        default:
            return state;
    }
}
