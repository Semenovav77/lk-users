import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button as BaseButton, Form, Input as BaseInput } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import './Login.scss';

const Login = (props) => {
  const { touched, errors, handleChange, handleBlur, handleSubmit, isAuth } = props;
  /*  if (isAuth) {
        return <Redirect to='/users' />
    }*/
  if (isAuth) {
    props.nextStep();
  }

  return (
    <div className="container">
      <div className="top">
        <h2>Войти в личный кабинет</h2>
        <p>Пожалуйcта, ввойдите в свой личный кабинет </p>
      </div>
      <Form onFinish={handleSubmit} className="form-input">
        <Form.Item
          validateStatus={!touched.email ? '' : errors.email && touched.email ? 'error' : 'success'}
          hasFeedback
          help={touched.email && errors.email}
        >
          <BaseInput
            id="email"
            prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="E-Mail"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={
            !touched.password ? '' : errors.password && touched.password ? 'error' : 'success'
          }
          hasFeedback
          help={touched.password && errors.password}
        >
          <BaseInput
            id="password"
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
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
  );
};

export default Login;
