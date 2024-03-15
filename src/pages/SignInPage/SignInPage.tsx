import { HeartTwoTone } from '@ant-design/icons';
import { Flex } from 'antd';
import { SignInForm } from '../../components';
import { FormWrarpper } from '../../components/commonStyles';

export const SignInPage = () => {
  return (
    <FormWrarpper>
      <Flex gap="5px">
        <HeartTwoTone twoToneColor="#1d18a4" />
        <div style={{ color: 'white' }}>Shary</div>
      </Flex>
      <SignInForm></SignInForm>
    </FormWrarpper>
  );
};
