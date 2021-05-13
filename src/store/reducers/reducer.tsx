import * as actions from '../actions/actionTypes';

const initialState = {
    showForm: false,
    allWishlists: {},
    isLoggedIn: true,
};

const reducer = (state = initialState, action) => {
    if (action.type === actions.SHOW_FORM) {
        return {
            ...state,
            showForm: !state.showForm,
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
