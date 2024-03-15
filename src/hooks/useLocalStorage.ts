import { useNavigate } from 'react-router-dom';
import { AuthCredentials, UserCredentials } from '../types';
import { delay } from '../utils';

const mockUsersAuthCredentials = [
  { id: 4, name: 'Роберт Закиров', email: 'ra.20.z02@mail.ru', password: '123' },
  { id: 5, name: 'Рамиль Сагидуллин', email: 'blackRay@mail.ru', password: '321' },
];

export const useLocalStorage = () => {
  const navigate = useNavigate();

  const setUsers = (user?: UserCredentials) => {
    const cachedUsers = localStorage.getItem('registredUsers') ?? '';

    if (!user && !cachedUsers) {
      localStorage.setItem('registredUsers', JSON.stringify(mockUsersAuthCredentials));
      return;
    }

    const isUserExists = JSON.parse(cachedUsers)?.some((i: UserCredentials) => {
      return i.name === user?.name && i.email === user?.email && i.password === user?.password;
    });

    if (isUserExists) {
      alert('Пользователь уже существует');
    } else if (user) {
      localStorage.setItem('registredUsers', JSON.stringify([...JSON.parse(cachedUsers), user]));

      alert('Вы зарегистрированы');
      navigate('/shary/main');
    }
  };

  const getUsers = () => {
    const cachedUsers = localStorage.getItem('registredUsers');

    if (cachedUsers) return JSON.parse(cachedUsers);

    return mockUsersAuthCredentials;
  };

  const saveUser = (user: UserCredentials) => {
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  const deleteUser = () => {
    sessionStorage.removeItem('user');
  };

  const getCurrentUser = () => {
    const user = sessionStorage.getItem('user');
    return user && JSON.parse(user).name;
  };

  const loginFunc = ({ username, password }: AuthCredentials) => {
    delay(1000);

    const users = getUsers();
    const targetUser = users.find((user: UserCredentials) => {
      const { name } = user;
      const userPassword = user.password;

      return username === name && password === userPassword;
    });

    return targetUser ?? null;
  };

  return { setUsers, getUsers, saveUser, deleteUser, getCurrentUser, loginFunc };
};
