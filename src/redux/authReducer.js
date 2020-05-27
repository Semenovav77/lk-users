import {API} from "./../api/api";
import {openNotification} from "../helpers/notification";

const SET_AUTH = 'auth/SET_AUTH';
const TOOGLE_ISAUTH = 'auth/TOOGLE_ISAUTH';

let initialState = {
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state
            };
        case TOOGLE_ISAUTH:
            return {
                ...state,
                isAuth: true,
            };
        default:
            return state;
    }
};

export default authReducer;

const toogleAuth = () => {
    return {
        type: TOOGLE_ISAUTH
    }
};

export const loginThunkCreator = (email, password) => {
    return (dispatch) => {
        API.login(email, password).then(data => {
            if (data.data.length != 0) dispatch(toogleAuth())
            else {
                openNotification({
                    title: 'Ошибка!',
                    text: 'Неверная почта или пароль',
                    type: 'error',
                });
            }
        })
    }
};

