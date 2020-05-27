import {withFormik} from 'formik';
import {Login} from './../components';
import {connect} from 'react-redux';
import {loginThunkCreator} from './../redux/authReducer'

const LoginContainer = withFormik({
    mapPropsToValues: () => ({email: '', password: ''}),
    validate: values => {

    },
    handleSubmit: (values, {props}) => {
        props.loginTC(values.email, values.password)
    },

    displayName: 'Login', // helps with React DevTools
})(Login);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginTC: loginThunkCreator})(LoginContainer);