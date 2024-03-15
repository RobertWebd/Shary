import { usersStore } from '../store/users';

export const getIdByName = (name: string | undefined) => {
  const { users } = usersStore;

  const user = users.find((user) => user.name === name);
  return user ? user.id : null;
};
