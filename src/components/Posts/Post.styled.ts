import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 550px;
  height: fit-content;
  background-color: rgb(34, 34, 34);
  margin: 30px 0;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PostHeader = styled.div`
  display: flex;
  gap: 10px;
`;

export const PostHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

export const PostInfo = styled.div``;

export const PostImg = styled.img`
  width: 500px;
`;

export const PostBottom = styled.div`
  display: flex;
  gap: 10px;
`;

export const WrapperActions = styled.div`
  background-color: rgb(51, 51, 51);
  padding: 7px;
  border-radius: 15px;
`;

export const CommentsWrapper = styled(Flex)`
  flex-direction: column;
`;

export const CommentWrapper = styled(Flex)`
  gap: 10px;
`;

export const CommentContent = styled(Flex)`
  flex-direction: column;
  gap: 3px;
`;

export const CommentTime = styled.p`
  font-size: 14px;
  color: rgb(117, 117, 117);
`;

export const CommentSenderName = styled(Link)`
  color: white;
  font-size: 15px;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const HeaderName = styled(Link)`
  color: rgb(113, 170, 236);
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderTime = styled.p`
  color: rgb(130, 130, 130);
`;

export const CustomSpan = styled.span`
  color: rgb(224, 226, 229);
`;
