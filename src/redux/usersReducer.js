import {API} from './../api/api';

const SET_USERS = 'users/SET-USERS';
const DEL_USER = 'users/DEL_USER';
const ADD_USER = 'users/ADD_USER';

let initialState = [
    /* {
         id: '1',
         fullname: 'Василий Иванов',
         email: 'ivanov@gmail.com'
     },
     {
         id: '2',
         fullname: 'Евгений Трифонович',
         email: 'eugen@gmail.com'
     },
     {
         id: '3',
         fullname: 'Владимир Петров',
         email: 'petrov@gmail.com'
     }*/
]

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return [
                ...state, ...action.payload
            ];
        case DEL_USER:
            let newState = state.filter(el => (el.id != action.payload));
            return newState;
        case ADD_USER:
            return [
                ...state,
                {
                    id: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)),
                    fullname: action.payload.name,
                    email: action.payload.email
                }
            ];
        default:
            return state;
    }
};

export default usersReducer;

const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
};

export const delUsers = (id) => {
    return {
        type: DEL_USER,
        payload: id
    }
};

export const addUser = (name, email) => {
    return {
        type: ADD_USER,
        payload: {
            name,
            email
        }
    }
};

export const getUsers = () => {
    return (dispatch) => {
        API.getUser().then((data) => {
            dispatch(setUsers(data.data))
        });
    }
};