import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Form, Spin } from 'antd';
import { RegisterText, SignUpLink, SpinContainer } from './SignInForm.styled';
import { useNavigate } from 'react-router-dom';
import { AuthCredentials } from '../../types';
import { useLocalStorage } from '../../hooks';
import { currentUserStore } from '../../store/current-user';
import { getIdByName } from '../../utils';
import { CustomInput } from '../commonStyles';

export const SignInForm: React.FC = () => {
  const [spinVisible, setSpinVisible] = useState(false);
  const { loginFunc, saveUser } = useLocalStorage();

  const navigate = useNavigate();

  const onFinish = (values: AuthCredentials) => {
    setSpinVisible(!spinVisible);

    setTimeout(() => {
      const { username, password } = values;
      const { setCurrentUser } = currentUserStore;

      const user = loginFunc({ username: username, password: password });

      if (user) {
        saveUser(user);
        navigate('/shary/main');
        setCurrentUser(getIdByName(username));
      } else {
        alert('Такого пользователя не существует');
      }

      setSpinVisible(false);
    }, 1000);
  };

  return (
    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
        <CustomInput prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <CustomInput prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: '#0300bf',
              },
            },
          }}
        >
          {spinVisible ? (
            <SpinContainer>
              <Spin />
            </SpinContainer>
          ) : (
            <Button block={true} htmlType="submit" className="login-form-button">
              Sign in
            </Button>
          )}

          <RegisterText>
            Or <SignUpLink onClick={() => navigate('/shary/registration')}>register now!</SignUpLink>
          </RegisterText>
        </ConfigProvider>
      </Form.Item>
    </Form>
  );
};
