import {currentUserReducer} from './currentUser';
import {currentAlbumReducer} from './currentAlbum';
import {fetchDataReducer} from './fetchedData';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    currentAlbum: currentAlbumReducer,
    fetchedData: fetchDataReducer,
});
