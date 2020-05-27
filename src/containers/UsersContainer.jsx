import React from 'react';
import {connect} from 'react-redux';

import {Users} from './../components'

const mapStateToProps = (state) => ({
    users: state.users,
    isAuth: state.auth.isAuth,
    fullname: state.auth.fullname
});

export default connect(mapStateToProps,null)(Users);