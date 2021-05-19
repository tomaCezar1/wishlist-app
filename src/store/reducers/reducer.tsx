import * as actions from '../actions/actionTypes';
import { AppState } from '../../utils/interfaces';

const initialState: AppState = {
    username: '',
    showWishlistForm: false,
    showRegisterForm: false,
    showLoginForm: false,
    allWishlists: [],
    isLoggedIn: false,
    token: '',
};

const reducer = (state = initialState, action) => {
    if (action.type === actions.SHOW_WISHLIST_FORM) {
        return {
            ...state,
            showWishlistForm: !state.showWishlistForm,
        };
    }

    if (action.type === actions.SHOW_REGISTER_FORM) {
        return {
            ...state,
            showRegisterForm: !state.showRegisterForm,
        };
    }

    if (action.type === actions.SHOW_LOGIN_FORM) {
        return {
            ...state,
            showLoginForm: !state.showLoginForm,
        };
    }

    if (action.type === actions.UPDATE_STORE_WISHLISTS) {
        return {
            ...state,
            allWishlists: action.wishlists,
        };
    }

    if (action.type === actions.AUTHENTICATE) {
        return {
            ...state,
            token: action.token,
            isLoggedIn: true,
            username: action.username,
        };
    }

    if (action.type === actions.LOGOUT) {
        return {
            ...state,
            token: '',
            isLoggedIn: false,
        };
    }
    return state;
};

export default reducer;
