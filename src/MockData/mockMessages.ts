import { TypeMessage } from '../types';

export const mockMessages: TypeMessage[] = [
  {
    messageId: 1,
    from: 4,
    to: 5,
    message: 'Привет',
    createDate: new Date(2024, 2, 7, 9, 3, 5),
  },
  {
    messageId: 2,
    from: 5,
    to: 4,
    message: 'Здарова',
    createDate: new Date(2024, 2, 7, 10, 4, 5),
  },
  {
    messageId: 3,
    from: 2,
    to: 4,
    message: 'Как дела?',
    createDate: new Date(2024, 2, 8, 8, 2, 5),
  },
];
