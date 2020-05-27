import React from 'react';
import {connect} from 'react-redux';

import {Users} from './../components';
import {getUsers, delUsers, addUser} from './../redux/usersReducer'

const mapStateToProps = (state) => ({
    users: state.users,
    isAuth: state.auth.isAuth,
    fullname: state.auth.fullname
});

export default connect(mapStateToProps,{getUsers, delUsers, addUser})(Users);