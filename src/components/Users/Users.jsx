import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';

import {User} from './../../components'
import '../InputContact/InputContact.scss'
import {InputContact} from "../../components";

const Users = ({users, isAuth, fullname, getUsers, delUsers, addUser}) => {

    useEffect(() => {
        getUsers();
    }, []);

    if (!isAuth) {
        return <Redirect to='/login'/>
    }
    return (
        <>
            {users.map((user) => <User key={user.id} user={user} delUsers={delUsers}/>)}
            <InputContact addUser={addUser}/>
        </>
    );
};

export default Users;