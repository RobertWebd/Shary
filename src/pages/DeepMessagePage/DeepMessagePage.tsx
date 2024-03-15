import { Link, useParams } from 'react-router-dom';
import { currentUserStore, messagesStore } from '../../store';
import {
  BackButton,
  ChatBodyWrapper,
  ChatHeaderWrapper,
  ChatInputWrapper,
  ChatWrapper,
  CustomInput,
  DialogMessageWrapper,
  HeaderName,
  MessageWrapper,
} from './DeepMessagePage.styled';
import { Avatar } from '../../components';
import { findAvatar, getNameById } from '../../utils';
import { SendOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

export const DeepMessagePage = observer(() => {
  const [inputMessage, setInputMessage] = useState('');

  const { id } = useParams();

  const { messages, setNewMessage } = messagesStore;
  const { currentUser } = currentUserStore;

  const name = getNameById(Number(id));

  const filteredMessages = messages.filter(
    (message) => (message.from === currentUser || message.to === currentUser) && (message.from === Number(id) || message.to === Number(id)),
  );
  const sortedMessages = filteredMessages.sort((a, b) => (new Date(a.createDate).getTime() > new Date(b.createDate).getTime() ? 1 : 0));

  const handleSendMessage = (from: number | null, id: number) => {
    if (!inputMessage) return;

    const message = inputMessage;
    const date = new Date();
    setNewMessage(from, id, message, date);
    setInputMessage('');
  };

  return (
    <MessageWrapper>
      <ChatWrapper>
        <ChatHeaderWrapper>
          <BackButton to="/shary/main/messages"> Назад</BackButton>
          <HeaderName to={`/shary/main/profile/${id}`}>{name}</HeaderName>
          <Link to={`/shary/main/profile/${id}`}>
            <Avatar src={findAvatar(name)} size="40px"></Avatar>
          </Link>
        </ChatHeaderWrapper>
        <ChatBodyWrapper>
          {sortedMessages &&
            sortedMessages.map((message) => {
              const senderName = getNameById(message.from);
              return (
                <DialogMessageWrapper key={message.messageId}>
                  <Avatar src={findAvatar(senderName)} size="34px"></Avatar>
                  <div>
                    <div style={{ color: 'rgb(113, 170, 236)' }}>{senderName}</div>
                    <p style={{ color: 'white' }}>{message.message}</p>
                  </div>
                </DialogMessageWrapper>
              );
            })}
        </ChatBodyWrapper>
        <ChatInputWrapper>
          <CustomInput
            value={inputMessage}
            placeholder="Напишите сообщение..."
            onChange={(e) => setInputMessage(e.target.value)}
          ></CustomInput>
          <SendOutlined onClick={() => handleSendMessage(currentUser, Number(id))} />
        </ChatInputWrapper>
      </ChatWrapper>
    </MessageWrapper>
  );
});
