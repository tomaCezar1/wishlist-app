const initialState = {
    showForm: false,
};

const formReducer = (state = initialState, action) => {
    if (action.type === 'SHOW_FORM') {
        return {
            ...state,
            showForm: !state.showForm,
        };
    }
    return state;
};

export default formReducer;
