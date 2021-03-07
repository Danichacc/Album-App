import {
    CLEAR_USER,
    EDIT_USER,
    EDIT_USER_ADDRESS,
    EDIT_USER_COMPANY,
    EDIT_USER_GEO,
    SET_USER
} from './actions';

const defaultState = {
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
};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload,
            }

        case EDIT_USER:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            }

        case EDIT_USER_ADDRESS:
            return {
                ...state,
                address: {
                    ...state.address,
                    [action.payload.field]: action.payload.value,
                }
            }

        case EDIT_USER_COMPANY:
            return {
                ...state,
                company: {
                    ...state.company,
                    [action.payload.field]: action.payload.value,
                }
            }

        case EDIT_USER_GEO:
            return {
                ...state,
                address: {
                    ...state.address,
                    geo: {
                        ...state.address.geo,
                        [action.payload.field]: action.payload.value,
                    }
                }
            }

        case CLEAR_USER:
            return {
                ...state,
                ...defaultState,
            }

        default:
            return state;
    }
}
