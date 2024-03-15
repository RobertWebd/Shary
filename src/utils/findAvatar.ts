import { usersStore } from '../store/users';

export const findAvatar = (name: string | undefined) => {
  const { users } = usersStore;

  const user = users.find((user) => {
    return user.name === name;
  });

  return user ? user.avatar : undefined;
};
