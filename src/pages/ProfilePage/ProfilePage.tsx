import { useParams } from 'react-router-dom';
import { FriendWrapper, FriendsWrapper, HeadInfo, InfoWrapper, Name, ProfileWrapper, Wrapper } from './ProfilePage.styled';
import { Avatar, Post } from '../../components';
import { findAvatar, getNameById } from '../../utils';
import { friendsStore, postsStore } from '../../store';
import { observer } from 'mobx-react-lite';
import { Posts } from '../../types';

export const ProfilePage = observer(() => {
  const { id } = useParams();

  const { friends } = friendsStore;
  const { posts } = postsStore;

  const filteredPosts = posts.filter((post) => post.name === getNameById(Number(id)));

  const currentUserFriendsId = friends?.filter((friend) => friend.id === Number(id))?.[0]?.friends;

  return (
    <ProfileWrapper>
      <InfoWrapper>
        <HeadInfo>
          <Avatar src={findAvatar(getNameById(Number(id)))} size="150px"></Avatar>
          <div>{getNameById(Number(id))}</div>
        </HeadInfo>
        <FriendsWrapper>
          <div style={{ fontWeight: '700  ', fontSize: '18px' }}>Друзья</div>

          {currentUserFriendsId?.length && currentUserFriendsId ? (
            <FriendWrapper>
              {currentUserFriendsId?.map((friendId) => (
                <Wrapper key={friendId} to={`/shary/main/profile/${friendId}`}>
                  <Avatar src={findAvatar(getNameById(friendId))} size="64px"></Avatar>
                  <Name>{getNameById(friendId)?.split(' ')[0]}</Name>
                </Wrapper>
              ))}
            </FriendWrapper>
          ) : (
            <div>Нет друзей</div>
          )}
        </FriendsWrapper>
      </InfoWrapper>
      <div>
        {filteredPosts.length !== 0 ? (
          filteredPosts?.map((currPosts: Posts) => {
            return <Post key={currPosts.postId} {...currPosts}></Post>;
          })
        ) : (
          <p style={{ color: 'white' }}>Нет записей</p>
        )}
      </div>
    </ProfileWrapper>
  );
});
