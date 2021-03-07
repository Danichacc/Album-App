export const SET_USER = 'SET_USER';
export const EDIT_USER = 'EDIT_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const setCurrentUser = user => ({type: SET_USER, payload: user});
export const editCurrentUser = (field, value) => ({type: EDIT_USER, payload: {field, value}});
export const clearCurrentUser = () => ({type: CLEAR_USER});

export const EDIT_USER_ADDRESS = 'EDIT_USER_ADDRESS';
export const editCurrentUserAddress = (field, value) => ({type: EDIT_USER_ADDRESS, payload: {field, value}});

export const EDIT_USER_COMPANY = 'EDIT_USER_COMPANY';
export const editCurrentUserCompany = (field, value) => ({type: EDIT_USER_COMPANY, payload: {field, value}});

export const EDIT_USER_GEO = 'EDIT_USER_GEO';
export const editCurrentUserGeo = (field, value) => ({type: EDIT_USER_GEO, payload: {field, value}});
