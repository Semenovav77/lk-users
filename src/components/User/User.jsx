import React, {useState} from 'react';

import './User.scss';
import {Button, InputContact} from './../../components';
import {Button as BaseButton} from 'antd';

const User = ({user, delUsers, editUser }) => {

    const [toogleEdit, seToogleEdit] = useState(false);

    const onToogleEdit = () => {
        seToogleEdit(!toogleEdit)
    };

    return (
        <div className='user'>
            {(!toogleEdit) ? (
                <>
                    <div className='user__fullname'>
                        {user.fullname}
                    </div>
                    <div className='user__email'>
                        {user.email}
                    </div>
                    <div className='user__btn-edit'>
                        <BaseButton onClick={onToogleEdit}>Редактировать</BaseButton>
                    </div>
                </>
            ) : (
                <>
                    <InputContact text={"Сохранить"} nameVal={user.fullname} emailVal={user.email} id={user.id} onToogleEdit={onToogleEdit} editUser={editUser} />
                </>
            )}
            <div className='user__btn-delete'>
                <BaseButton onClick={() => delUsers(user.id)}>Удалить</BaseButton>
            </div>
        </div>
    );
};

export default User;