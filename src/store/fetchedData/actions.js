export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const UPDATE_STATE = 'UPDATE_STATE';
export const TOKEN_USERS = 'https://603266f7a223790017acf0ce.mockapi.io/users';
export const TOKEN_ALBUMS = 'https://jsonplaceholder.typicode.com/albums';
export const TOKEN_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

export const fetchData = token => ({
    type: FETCH_DATA,
    payload: {
        token,
        start: fetchDataStart,
        success: fetchDataSuccess,
        failure: fetchDataFailure,
    }
});

export const fetchDataStart = () => ({type: FETCH_DATA_START});
export const fetchDataSuccess = (data, token) => ({type: FETCH_DATA_SUCCESS, payload: {data, token}});
export const fetchDataFailure = () => ({type: FETCH_DATA_FAILURE});

export const createEntity = 'createEntity';
export const updateEntity = 'updateEntity';
export const deleteEntity = 'deleteEntity';

export function crudEntity(actionName, entity) {
    const entityId = `/${entity.id}`;
    const entityToken = entity.albumId ? TOKEN_PHOTOS :
        entity.userId ? TOKEN_ALBUMS : TOKEN_USERS;

    return {
        type: actionName === createEntity ? ADD_DATA :
            actionName === updateEntity ? EDIT_DATA :
            actionName === deleteEntity ? REMOVE_DATA : null,
        payload: {
            token: entityToken,
            url: actionName === createEntity ? entityToken : (entityToken + entityId),
            success: updateState,
            failure: fetchDataFailure,
            entity,
        }
    };
}

export function updateState(actionType, entity, token) {
    return {
        type: UPDATE_STATE,
        payload: {
            actionType,
            entity,
            token
        }
    };
}
