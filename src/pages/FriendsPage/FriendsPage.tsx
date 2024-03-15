import { observer } from 'mobx-react-lite';
import { Avatar } from '../../components';
import { friendsStore, usersStore } from '../../store';
import { currentUserStore } from '../../store/current-user';
import { findAvatar, getNameById } from '../../utils';
import { getIdByName } from '../../utils/getIdByName';
import {
  AddFriendWrapper,
  CustomButton,
  CustomName,
  FriendInfo,
  FriendInfoWrapper,
  FriendToAddWrapper,
  FriendWrapper,
  FriendsWrapper,
  MessageLink,
  Wrapper,
} from './FriendsPage.styled';
import { Link } from 'react-router-dom';

export const FriendsPage = observer(() => {
  const { friends, deleteFriend, addFriend } = friendsStore;
  const { users } = usersStore;
  const { currentUser } = currentUserStore;

  const currentFriends = friends.filter((friend) => friend.id === currentUser)?.[0]?.friends;

  const friendsToAdd = users.filter((user) => {
    return user.name !== getNameById(currentUser) && !currentFriends?.some((friend) => friend === user.id);
  });

  const handleDeleteFriend = (name: string | undefined) => {
    deleteFriend(currentUser, name);
  };

  const handleAddFriend = (name: string) => {
    addFriend(currentUser, name);
  };

  return (
    <Wrapper>
      <FriendsWrapper>
        <p>Все друзья</p>

        {currentFriends?.length && currentFriends ? (
          currentFriends.map((friendId: number | null) => {
            const name = getNameById(friendId);
            return (
              <FriendWrapper key={friendId}>
                <Link to={`/shary/main/profile/${friendId}`}>
                  <Avatar src={findAvatar(name)} size="40px"></Avatar>
                </Link>

                <FriendInfo>
                  <Link to={`/shary/main/profile/${friendId}`}>
                    <CustomName>{name}</CustomName>
                  </Link>
                  <MessageLink to={`/shary/main/messages/${friendId}`}>Написать сообщение</MessageLink>
                </FriendInfo>
                <CustomButton onClick={() => handleDeleteFriend(name)}> Удалить из друзей</CustomButton>
              </FriendWrapper>
            );
          })
        ) : (
          <div>Нету друзей</div>
        )}
      </FriendsWrapper>
      <FriendToAddWrapper>
        <p>Возможные друзья</p>
        {friendsToAdd &&
          friendsToAdd.map((friend) => {
            const friendName = friend.name;
            return (
              <AddFriendWrapper key={getIdByName(friend.name)}>
                <FriendInfoWrapper to={`/shary/main/profile/${getIdByName(friendName)}`}>
                  <Avatar src={findAvatar(friendName)} size="40px"></Avatar>
                  <CustomName>{friendName}</CustomName>
                </FriendInfoWrapper>

                <CustomButton onClick={() => handleAddFriend(friendName)}>Добавить в друзья</CustomButton>
              </AddFriendWrapper>
            );
          })}
      </FriendToAddWrapper>
    </Wrapper>
  );
});
