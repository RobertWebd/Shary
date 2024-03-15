import { TypeFriends } from '../types';

export const mockFriends: TypeFriends[] = [
  {
    id: 1,
    name: 'Валерий Шильников',
    friends: [2, 3, 4],
  },
  {
    id: 2,
    name: 'Игорь Дроздов',
    friends: [3, 4, 5],
  },
  {
    id: 3,
    name: 'Дарья Фролова',
    friends: [1, 4],
  },
  {
    id: 4,
    name: 'Роберт Закиров',
    friends: [1, 2, 5],
  },
  {
    id: 5,
    name: 'Рамиль Сагидуллин',
    friends: [1, 3, 4],
  },
];
