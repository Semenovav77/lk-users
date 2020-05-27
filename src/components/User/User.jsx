import React from 'react';

import './User.scss';
import { Button } from 'antd';

const User = ({user, delUsers}) => {
    return (
        <div className='user'>
            <div className='user__fullname'>{user.fullname}</div>
            <div className='user__email'>{user.email} </div>
            <div className='user__btn-redact'><Button>Редактировать</Button></div>
            <div className='user__btn-delete'><Button onClick={() => delUsers(user.id)}>Удалить</Button></div>
        </div>
    );
};

export default User;