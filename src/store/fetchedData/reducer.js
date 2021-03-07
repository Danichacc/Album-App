import {
    ADD_DATA,
    EDIT_DATA,
    REMOVE_DATA,
    FETCH_DATA_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    TOKEN_USERS,
    TOKEN_ALBUMS,
    TOKEN_PHOTOS,
    UPDATE_STATE
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
            let arrName;

            action.payload.token === TOKEN_USERS ? arrName = 'users' :
                action.payload.token === TOKEN_ALBUMS ? arrName = 'albums' :
                    action.payload.token === TOKEN_PHOTOS ? arrName = 'photos' :
                        arrName = null;

            if (!arrName) return state;

            return {
                ...state,
                isFetching: false,
                [arrName]: action.payload.data,
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
            }

        case UPDATE_STATE:
            let arr;
            let newArr;

            action.payload.token === TOKEN_USERS ? arr = 'users' :
                action.payload.token === TOKEN_ALBUMS ? arr = 'albums' :
                    action.payload.token === TOKEN_PHOTOS ? arr = 'photos' :
                        arr = null;

            if (!arr) return state;

            if (action.payload.actionType === ADD_DATA) {
                newArr = state[arr];
                newArr.push(action.payload.entity);
            } else if (action.payload.actionType === EDIT_DATA) {
                newArr = state[arr].map(member => {
                    if (member.id === action.payload.entity.id) {
                        member = action.payload.entity;
                    }

                    return member;
                });
            } else if (action.payload.actionType === REMOVE_DATA) {
                newArr = state[arr].filter(member => member.id !== action.payload.entity.id);
            }

            return {
                ...state,
                [arr]: newArr,
            }

        default:
            return state;
    }
}
