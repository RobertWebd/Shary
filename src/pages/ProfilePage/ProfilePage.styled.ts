import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InfoWrapper = styled(Flex)`
  padding: 30px;
  gap: 20px;
`;

export const HeadInfo = styled(Flex)`
  border-radius: 40px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FriendsWrapper = styled(Flex)`
  padding: 0 40px;
  border-radius: 40px;
  background-color: rgb(34, 34, 34);
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

export const FriendWrapper = styled(Flex)`
  gap: 20px;
`;

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Name = styled.p`
  color: white;
`;
