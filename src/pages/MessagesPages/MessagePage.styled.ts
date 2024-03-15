import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MessagesWrapper = styled(Flex)`
  padding: 20px 0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MessageWrapper = styled(Link)<{ $isFirst: boolean; $isLast: boolean }>`
  border-radius: ${(props) => (props.$isFirst ? '10px 10px 0 0' : props.$isLast ? '0 0 10px 10px' : '0')};

  display: flex;
  width: 550px;
  padding: 10px;
  background-color: rgb(34, 34, 34);
  gap: 10px;
  cursor: pointer;
`;

export const InfoWrapper = styled(Flex)`
  width: 90%;
  flex-direction: column;
  border-bottom: 0.1px solid rgb(54, 55, 56);
  padding-bottom: 5px;
  gap: 5px;
  font-size: 15px;
`;

export const LastMessage = styled.p`
  color: rgb(147, 147, 147);
  font-size: 15px;
`;

export const Name = styled.p`
  color: white;
`;
