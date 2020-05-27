const SET_USERS = 'users/SET-USERS' ;

let initialState = [
    {
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
    }
]

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default usersReducer;