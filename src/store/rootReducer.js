import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SET_USER,
    EDIT_USER,
    CLEAR_USER,
    SET_ALBUM,
    TOKEN_USERS,
    TOKEN_ALBUMS,
    TOKEN_PHOTOS,
} from './actions';

const defaultState = {
    albums: [],
    currentAlbum: {
        userId: '',
        id: '',
        title: '',
    },
    users: [],
    currentUser: {
        id: '',
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: '',
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        }
    },
    photos: [],
};

export function rootReducer(state = defaultState, action) {
    switch(action.type) {
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

        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
            }


        case EDIT_USER:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    [action.payload.field]: action.payload.value,
                }
            }

        case CLEAR_USER:
            return {
                ...state,
                currentUser: {
                    id: '',
                    name: '',
                    username: '',
                    email: '',
                    address: {
                        street: '',
                        suite: '',
                        city: '',
                        zipcode: '',
                        geo: {
                            lat: '',
                            lng: '',
                        }
                    },
                    phone: '',
                    website: '',
                    company: {
                        name: '',
                        catchPhrase: '',
                        bs: '',
                    }
                }
            }

        case SET_ALBUM:
            return {
                ...state,
                currentAlbum: action.payload,
            }

        default:
            return state;
    }
}
