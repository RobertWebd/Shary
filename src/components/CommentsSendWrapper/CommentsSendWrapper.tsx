import { Avatar } from '..';
import { useLocalStorage } from '../../hooks';
import { CommentsSendProps } from '../../types';
import { findAvatar } from '../../utils';
import { CommentsSendWrap, CustomInput, CustomSendButton } from './CommentsSendWrapper.styled';
import { useState } from 'react';

export const CommentsSendWrapper: React.FC<CommentsSendProps> = ({ id, handleLeftComment }) => {
  const [newComment, setNewComment] = useState('');

  const { getCurrentUser } = useLocalStorage();

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const onLeftComment = () => {
    handleLeftComment(id, newComment);
    setNewComment('');
  };

  return (
    <CommentsSendWrap>
      <Avatar src={findAvatar(getCurrentUser())} size="34px"></Avatar>
      <CustomInput value={newComment} onChange={onCommentChange} placeholder="Написать комментарий..." />
      <CustomSendButton onClick={onLeftComment} />
    </CommentsSendWrap>
  );
};
