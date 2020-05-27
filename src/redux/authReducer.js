const SET_AUTH = 'auth/SET_AUTH' ;

let initialState = {
    isAuth: false,
    id: null,
    fullname: ''
 };

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default authReducer;