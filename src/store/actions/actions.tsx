import { PostWishlistData } from '../../utils/interfaces';
import * as actions from './actionTypes';

export const authenticate = (token: string, username: string) => {
    return {
        type: actions.AUTHENTICATE,
        token: token,
        username,
    };
};

export const showWishlistForm = () => {
    return {
        type: actions.SHOW_WISHLIST_FORM,
    };
};

export const showRegisterForm = () => {
    return {
        type: actions.SHOW_REGISTER_FORM,
    };
};

export const showLoginForm = () => {
    return {
        type: actions.SHOW_LOGIN_FORM,
    };
};

export const createWishlist = (wishlist: PostWishlistData) => {
    return {
        type: actions.CREATE_WISHLIST,
        wishlist,
    };
};

export const updateStoreWishlists = (wishlists) => {
    return {
        type: actions.UPDATE_STORE_WISHLISTS,
        wishlists,
    };
};
