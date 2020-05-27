import {withFormik} from 'formik';
import {Login} from './../components';

const LoginContainer = withFormik({
    mapPropsToValues: () => ({email: '', password: ''}),
    validate: values => {

    },
    handleSubmit: (values) => {
        debugger
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
        }, 1000);
    },

    displayName: 'Login', // helps with React DevTools
})(Login);

export default LoginContainer;