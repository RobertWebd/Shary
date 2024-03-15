import styled from 'styled-components';

export const RegisterText = styled.span`
  font-size: 12px;
  color: rgb(117, 117, 117);
`;

export const SignUpLink = styled.span`
  color: white;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: white;
    opacity: 0.7;
  }
`;

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgb(84, 84, 84);
`;
