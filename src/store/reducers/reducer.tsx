import * as actions from '../actions/actionTypes';

interface InitialState {
    showForm: boolean;
    registerForm: boolean;
    allWishlists: { id: number; title: string; wishListDate: string }[];
    isLoggedIn: boolean;
}

const initialState: InitialState = {
    showForm: false,
    registerForm: false,
    allWishlists: [],
    isLoggedIn: true,
};

const reducer = (state = initialState, action) => {
    if (action.type === actions.SHOW_FORM) {
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

    if (action.type === actions.FETCH_WISHLISTS) {
        return {
            ...state,
            allWishlists: action.wishlists,
        };
    }
    return state;
};

export default reducer;
