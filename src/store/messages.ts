import { makeAutoObservable } from 'mobx';
import { mockMessages } from '../MockData';
import { makePersistable } from 'mobx-persist-store';

class MessagesStore {
  messages = mockMessages;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'MessagesStore', properties: ['messages'], storage: window.localStorage });
  }

  setNewMessage = (from: number | null, to: number, message: string, date: Date) => {
    const newMessage = {
      messageId: new Date().getTime(),
      from: from,
      to: to,
      message: message,
      createDate: date,
    };
    this.messages = [...this.messages, newMessage];
  };
}

export const messagesStore = new MessagesStore();
