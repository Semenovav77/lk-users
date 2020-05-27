import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <div>{user.fullname}</div>
            <div>{user.email} </div>
        </div>
    );
};

export default User;