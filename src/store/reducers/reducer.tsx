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
    editWishlistId: null,
    wishlistModalId: null,
    wishlistModal: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SHOW_WISHLIST_FORM:
            return {
                ...state,
                showWishlistForm: !state.showWishlistForm,
                editWishlistId: null,
            };

        case actions.SHOW_REGISTER_FORM:
            return {
                ...state,
                showRegisterForm: !state.showRegisterForm,
            };

        case actions.SHOW_LOGIN_FORM:
            return {
                ...state,
                showLoginForm: !state.showLoginForm,
            };

        case actions.UPDATE_STORE_WISHLISTS:
            return {
                ...state,
                allWishlists: action.wishlists,
            };

        case actions.LOGIN:
            return {
                ...state,
                token: action.token,
                isLoggedIn: true,
                username: action.username,
            };

        case actions.LOGOUT:
            return {
                ...state,
                token: '',
                isLoggedIn: false,
                allWishlists: [],
            };

        case actions.TRIGGER_UPDATE_ACTION:
            return {
                ...state,
                editWishlistId: action.id,
            };

        case actions.TOGGLE_WISHLIST_MODAL:
            return {
                ...state,
                wishlistModal: !state.wishlistModal,
            };

        case actions.TRIGGER_WISHLIST_MODAL:
            return {
                ...state,
                wishlistModalId: action.id,
                wishlistModal: true,
            };

        default:
            return state;
    }
};

export default reducer;
