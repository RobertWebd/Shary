import { Outlet } from 'react-router-dom';
import { OutletWrapper, StyledLink, WrapperLayout, WrapperLogo } from './Layout.styled';
import { HeartTwoTone } from '@ant-design/icons';
import { useLocalStorage } from '../../hooks';
import { currentUserStore } from '../../store';

export const Layout = () => {
  const { deleteUser } = useLocalStorage();

  const { currentUser } = currentUserStore;

  const handleLogOut = () => {
    deleteUser();
  };

  return (
    <>
      <WrapperLayout>
        <WrapperLogo>
          <HeartTwoTone />
          <div>Shary</div>
        </WrapperLogo>
        <StyledLink to="/shary/main">News</StyledLink>
        <StyledLink to={`/shary/main/profile/${currentUser}`}>MyProfile</StyledLink>
        <StyledLink to="/shary/main/messages">Messages</StyledLink>
        <StyledLink to="/shary/main/friends">Friends</StyledLink>
        <StyledLink to="/shary" onClick={handleLogOut}>
          Log out
        </StyledLink>
      </WrapperLayout>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};
