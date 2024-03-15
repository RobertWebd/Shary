import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MessageWrapper = styled(Flex)`
  padding: 20px 0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ChatWrapper = styled(Flex)`
  min-width: 550px;
  border-radius: 20px;
  background-color: rgb(34, 34, 34);
  flex-direction: column;
`;

export const ChatHeaderWrapper = styled(Flex)`
  padding: 10px 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1px solid rgb(51, 51, 51);
`;

export const BackButton = styled(Link)`
  color: rgb(130, 130, 130);
  &:hover {
    color: rgba(130, 130, 130, 0.7);
  }
`;

export const HeaderName = styled(Link)`
  cursor: pointer;
  color: white;
  &:hover {
    color: white;
    opacity: 0.7;
  }
`;

export const ChatBodyWrapper = styled.div`
  overflow-x: auto;
  max-height: 500px;
  min-height: 500px;
`;

export const ChatInputWrapper = styled(Flex)`
  gap: 10px;
  padding: 15px 10px;
  background-color: rgb(41, 41, 41);
  border-radius: 0 0 20px 20px;
  justify-content: center;
  align-items: center;
`;

export const DialogMessageWrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-shrink: 0;
  gap: 10px;
`;
export const CustomInput = styled.input`
  width: 85%;
  background-color: inherit;
  border-color: rgb(85, 85, 85);
  color: white;
  padding: 10px;
  border: 1px solid rgb(85, 85, 85);
  border-radius: 5px;
`;
