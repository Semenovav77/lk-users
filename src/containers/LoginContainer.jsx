import {withFormik} from 'formik';
import {Login} from './../components';
import {connect} from 'react-redux';
import {loginThunkCreator} from './../redux/authReducer'
import {validateFormik} from "../helpers/validations";

const LoginContainer = withFormik({
    mapPropsToValues: () => ({email: '', password: ''}),
    validate: values => {
        let errors = {};
        const keys = Object.keys(values);
        keys.forEach(key => validateFormik[key] && validateFormik[key](errors, values[key]));
        return errors;
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