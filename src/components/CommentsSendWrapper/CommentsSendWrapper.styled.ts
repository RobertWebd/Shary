import { SendOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const CommentsSendWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const CustomSendButton = styled(SendOutlined)`
  cursor: 'pointer';
  color: rgb(63, 63, 63);
`;

export const CustomInput = styled.input`
  color: white;
  flex: 1 0 auto;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgb(85, 85, 85);
  background-color: inherit;
`;
