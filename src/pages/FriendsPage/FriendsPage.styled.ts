import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FriendsWrapper = styled.div`
  width: 550px;
  background-color: rgb(34, 34, 34);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FriendToAddWrapper = styled.div`
  min-width: 370px;
  background-color: rgb(34, 34, 34);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: 10px;
`;

export const FriendWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const AddFriendWrapper = styled(Flex)`
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const CustomName = styled.p`
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export const MessageLink = styled(Link)`
  width: fit-content;
  background-color: inherit;
  color: #71aaec;
  &:hover {
    text-decoration: underline;
  }
`;

export const CustomButton = styled.button`
  background-color: inherit;
  font-weight: 700;
  color: rgb(113, 170, 249);
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(57, 57, 57);
  }
`;
export const FriendInfoWrapper = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
`;
