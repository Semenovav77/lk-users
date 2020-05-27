import React from 'react';
import {Button as BaseButton, Form, Input as BaseInput} from 'antd';
import Icon from '@ant-design/icons';

const Login = (props) => {
    debugger
    const {
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <div>
            <div>
                <h2>Войти в личный кабинет</h2>
                <p>Пожалуйcта, ввойдите в свой личный кабинет </p>
            </div>
            <Form onFinish={handleSubmit}>
                <Form.Item
                >
                    <BaseInput
                        id='email'
                        prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="E-Mail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                >
                    <BaseInput
                        id='password'
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item>
                    <BaseButton type="primary" htmlType="submit">
                        Войти
                    </BaseButton>
                </Form.Item>
            </Form>
        </div>
    )

};

export default Login;