export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const SET_USER = 'SET_USER';
export const EDIT_USER = 'EDIT_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const SET_ALBUM = 'SET_ALBUM';
export const TOKEN_USERS = 'https://603266f7a223790017acf0ce.mockapi.io/users';
export const TOKEN_ALBUMS = 'https://jsonplaceholder.typicode.com/albums';
export const TOKEN_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

export const fetchData = token => ({
    type: FETCH_DATA,
    payload: {
        url: token,
        start: fetchDataStart,
        success: fetchDataSuccess,
        failure: fetchDataFailure,
    }
});

export const fetchDataStart = () => ({type: FETCH_DATA_START});
export const fetchDataSuccess = (data, url) => ({type: FETCH_DATA_SUCCESS, payload: {data, url}});
export const fetchDataFailure = () => ({type: FETCH_DATA_FAILURE});

export const createUser = user => ({
    type: ADD_DATA,
    payload: {
        url: TOKEN_USERS,
        failure: fetchDataFailure,
        user,
    }
});

export function updateUser(user) {
    const userId = `/${user.id}`;

    return ({
        type: EDIT_DATA,
        payload: {
            url: TOKEN_USERS + userId,
            failure: fetchDataFailure,
            user,
        }
    });
}

export function deleteUser(user) {
    const userId = `/${user.id}`;

    return ({
        type: REMOVE_DATA,
        payload: {
            url: TOKEN_USERS + userId,
            failure: fetchDataFailure,
            user,
        }
    });
}

export const setCurrentUser = user => ({type: SET_USER, payload: user});
export const editCurrentUser = (field, value) => ({type: EDIT_USER, payload: {field, value}});
export const clearCurrentUser = () => ({type: CLEAR_USER});

export const setCurrentAlbum = album => ({type: SET_ALBUM, payload: album});
