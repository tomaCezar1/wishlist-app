import * as actions from '../actions/actionTypes';

interface InitialState {
    showForm: boolean;
    registerForm: boolean;
    allWishlists: { id: number; title: string; wishListDate: string }[];
    isLoggedIn: boolean;
    token: string;
}

const initialState: InitialState = {
    showForm: false,
    registerForm: false,
    allWishlists: [],
    isLoggedIn: false,
    token: '',
};

const reducer = (state = initialState, action) => {
    if (action.type === actions.SHOW_CREATE_WISHLIST_FORM) {
        return {
            ...state,
            showForm: !state.showForm,
        };
    }

    if (action.type === actions.SHOW_REGISTER_FORM) {
        return {
            ...state,
            registerForm: !state.registerForm,
        };
    }

    if (action.type === actions.UPDATE_WISHLISTS) {
        return {
            ...state,
            allWishlists: action.wishlists,
        };
    }

    if (action.type === actions.ACCOUNT_REGISTRATION) {
        return {
            ...state,
            token: action.token,
            isLoggedIn: true,
        };
    }
    return state;
};

export default reducer;
