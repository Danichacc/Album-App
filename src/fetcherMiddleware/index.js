import {
    FETCH_DATA,
    ADD_DATA,
    EDIT_DATA,
    REMOVE_DATA,
} from '../store/fetchedData';

export default function fetcherMiddleware({dispatch}) {
    return next => action => {
        let result = null;

        if (action.type === FETCH_DATA) {
            const { token, start, success, failure } = action.payload;

            dispatch(start());

            fetch(token)
                .then(response => response.json())
                .then(result => dispatch(success(result, token)))
                .catch(error => dispatch(failure(error)));
        } else if (action.type === ADD_DATA || action.type === EDIT_DATA || action.type === REMOVE_DATA) {
            const { token, url, success, failure, entity } = action.payload;

            fetch(url, {
                method: action.type === ADD_DATA ? 'POST' :
                    action.type === EDIT_DATA ? 'PUT' : 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entity),
            }).then(response => response.json())
                .then(result => dispatch(success(action.type, result, token)))
                .catch(error => dispatch(failure(error)));
        } else {
            result = next(action);
        }

        return result;
    };
}
