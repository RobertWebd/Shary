import { usersStore } from '../store/users';

export const getNameById = (id: number | null) => {
  const { users } = usersStore;

  const user = users.find((user) => {
    return user.id === id;
  });

  return user ? user.name : undefined;
};
