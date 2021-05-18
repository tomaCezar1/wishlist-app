import * as actions from './actionTypes';

export const addWishlist = () => {
    return {
        type: actions.SHOW_CREATE_WISHLIST_FORM,
    };
};

export const register = () => {
    return {
        type: actions.SHOW_REGISTER_FORM,
    };
};
