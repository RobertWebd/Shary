import React from 'react';
import { Button, ConfigProvider, Form, Input } from 'antd';
import { SignInLink, TextSignIn } from './SignUpForm.styled';
import { useNavigate } from 'react-router-dom';
import { registrationCredentials } from '../../types';
import { useLocalStorage } from '../../hooks';
import { usersStore } from '../../store/users';
import { currentUserStore } from '../../store/current-user';
import { observer } from 'mobx-react-lite';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const SignUpForm: React.FC = observer(() => {
  const { setUsers, saveUser } = useLocalStorage();
  const { setGlobalUsers, users } = usersStore;
  const { setCurrentUser } = currentUserStore;

  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values: registrationCredentials) => {
    setGlobalUsers(values);
    setUsers(values);
    saveUser(values);
    setCurrentUser(users.length + 1);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: 'white',
          },
        },
      }}
    >
      <Form {...formItemLayout} form={form} name="register" labelWrap onFinish={onFinish} style={{ width: 440 }} scrollToFirstError>
        <Form.Item name="name" label="Username" rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          style={{ width: 440 }}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout} style={{ marginBottom: 0 }}>
          <Button htmlType="submit">Register</Button>
          <TextSignIn>
            Alerady have an account? <SignInLink onClick={() => navigate('/shary')}>Sign In</SignInLink>
          </TextSignIn>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
});
