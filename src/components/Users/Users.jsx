import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';

import {User} from './../../components'
import '../InputContact/InputContact.scss'
import {InputContact} from "../../components";
import './User.scss'

const Users = ({users, isAuth, getUsers, delUsers, addUser, editUser}) => {

    useEffect(() => {
        getUsers();
    }, []);

    if (!isAuth) {
        return <Redirect to='/login'/>
    }
    return (
        <>
            {users.map((user) => <User key={user.id} user={user} delUsers={delUsers} editUser={editUser}/>)}
            <div className='input-add'>
                <InputContact addUser={addUser} text={"Добавить"} onAdd={true}/>
            </div>
        </>
    );
};

export default Users;