import React from 'react';

import {User} from './../../components'

const Users = ({users, isAuth, fullname}) => {
    debugger
    return (
        <>
            {users.map((user) => <User user={user}/>)}
        </>
    );
};

export default Users;