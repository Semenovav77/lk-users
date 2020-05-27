import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import {User} from './../../components'

const Users = ({users, isAuth, fullname, getUsers}) => {

    useEffect(() => {
        getUsers();
    },[]);

    if (!isAuth) {
        return <Redirect to='/login' />
    }
    return (
        <>
            {users.map((user) => <User user={user}/>)}
        </>
    );
};

export default Users;