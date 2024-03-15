import { CommentOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Avatar, CommentsSendWrapper } from '..';
import { commentsStore } from '../../store';
import {
  CommentContent,
  CommentSenderName,
  CommentTime,
  CommentWrapper,
  CommentsWrapper,
  CustomSpan,
  HeaderName,
  HeaderTime,
  PostBottom,
  PostHeader,
  PostHeaderInfo,
  PostImg,
  PostInfo,
  PostWrapper,
  WrapperActions,
} from './Post.styled';
import { findAvatar, getIdByName } from '../../utils';
import { Posts, TypeComments } from '../../types';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export const Post = observer(({ postId, name, time, description, photo, likes, shares }: Posts) => {
  const { comments, handleLeftComment } = commentsStore;

  const postOwnerId = getIdByName(name);

  const countComments = (id: number) => {
    const com = comments?.reduce((initial, currentComment) => (currentComment.postId === id ? (initial += 1) : initial), 0);
    return com;
  };

  return (
    <PostWrapper key={postId}>
      <PostHeader>
        <Link to={`/shary/main/profile/${postOwnerId}`}>
          <Avatar src={findAvatar(name)} size="40px"></Avatar>
        </Link>
        <PostHeaderInfo>
          <HeaderName to={`/shary/main/profile/${postOwnerId}`}>{name}</HeaderName>
          <HeaderTime>{time}</HeaderTime>
        </PostHeaderInfo>
      </PostHeader>
      <PostInfo>{description}</PostInfo>
      <PostImg src={photo}></PostImg>
      <PostBottom>
        <WrapperActions>
          <HeartOutlined />
          <CustomSpan> {likes}</CustomSpan>
        </WrapperActions>
        <WrapperActions>
          <CommentOutlined />
          <CustomSpan> {countComments(postId)}</CustomSpan>
        </WrapperActions>
        <WrapperActions>
          <ShareAltOutlined />
          <CustomSpan> {shares}</CustomSpan>
        </WrapperActions>
      </PostBottom>
      <CommentsWrapper>
        {comments?.map((comment: TypeComments) => {
          if (comment.postId === postId) {
            const commentOwnerId = getIdByName(comment.senderName);
            return (
              <CommentWrapper key={comment.commentId}>
                <Link to={`/shary/main/profile/${commentOwnerId}`}>
                  <Avatar src={findAvatar(comment.senderName)} size="34px"></Avatar>
                </Link>
                <CommentContent>
                  <CommentSenderName to={`/shary/main/profile/${commentOwnerId}`}>{comment.senderName}</CommentSenderName>
                  <div>{comment?.comment}</div>
                  <CommentTime>{comment.time}</CommentTime>
                </CommentContent>
              </CommentWrapper>
            );
          }
        })}
      </CommentsWrapper>
      <CommentsSendWrapper id={postId} handleLeftComment={handleLeftComment}></CommentsSendWrapper>
    </PostWrapper>
  );
});
