import {API} from './../api/api';

const SET_USERS = 'users/SET-USERS' ;

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
        default:
            return state;
    }
};

const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
};

export default usersReducer;

export const getUsers = () => {
    return (dispatch) => {
        API.getUser().then((data) => {
            dispatch(setUsers(data.data))
        });
    }
};