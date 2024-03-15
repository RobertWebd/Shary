import { Avatar } from '../../components';
import { currentUserStore, messagesStore } from '../../store';
import { findAvatar, getNameById } from '../../utils';
import { InfoWrapper, LastMessage, MessageWrapper, MessagesWrapper, Name } from './MessagePage.styled';

export const MessagesPage = () => {
  const { messages } = messagesStore;
  const { currentUser } = currentUserStore;

  const filteredMessages = messages.filter((message) => message.from === currentUser || message.to === currentUser);

  const startedChatWithId = new Set<number | null>();

  filteredMessages.forEach((message) => {
    startedChatWithId.add(message.from);
    startedChatWithId.add(message.to);
  });

  startedChatWithId.delete(currentUser);

  const startedChatWithIdArr = Array.from(startedChatWithId);

  const findLastMessage = (friendId: number | null) => {
    let latestMessageDate = new Date(2011, 0, 1);
    let finalMessage = '';

    filteredMessages.forEach((message) => {
      if (message.from === friendId || message.to === friendId) {
        if (new Date(message.createDate).getTime() > new Date(latestMessageDate).getTime()) {
          latestMessageDate = message.createDate;
          finalMessage = message.message;
        }
      }
    });

    return finalMessage;
  };

  return (
    <MessagesWrapper>
      {startedChatWithIdArr && startedChatWithIdArr.length ? (
        startedChatWithIdArr.map((id: number | null, index) => (
          <MessageWrapper
            key={id}
            to={`/shary/main/messages/${id}`}
            $isFirst={index === 0}
            $isLast={index === startedChatWithIdArr.length - 1}
          >
            <Avatar src={findAvatar(getNameById(id))} size="54px"></Avatar>
            <InfoWrapper>
              <Name>{getNameById(id)}</Name>
              <LastMessage>{findLastMessage(id)}</LastMessage>
            </InfoWrapper>
          </MessageWrapper>
        ))
      ) : (
        <div>У вас пока нет собщений</div>
      )}
    </MessagesWrapper>
  );
};
