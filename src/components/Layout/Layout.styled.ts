import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
  height: 100%;
  border-radius: 0 40px 40px 0;
  position: fixed;
  left: 0;
`;

export const StyledLink = styled(Link)`
  color: rgb(178, 182, 186);
  margin: 5px 30px;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  &:hover {
    color: rgba(178, 182, 186, 0.7);
  }
`;

export const OutletWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapperLogo = styled.div`
  display: flex;
  gap: 5px;
  margin: 50px 60px;
  transform: scale(1.5);
`;
