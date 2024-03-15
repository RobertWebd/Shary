import { makeAutoObservable } from 'mobx';
import { MockUsers } from '../MockData';
import { registrationCredentials } from '../types';
import { makePersistable } from 'mobx-persist-store';

class UsersStore {
  users = MockUsers;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'UsersStore', properties: ['users'], storage: window.localStorage });
  }

  setGlobalUsers = (user: registrationCredentials) => {
    const createNewUser = {
      id: this.users.length + 1,
      name: user.name,
      avatar:
        'https://sun59-1.userapi.com/impf/HnDXZID-SDmaVYd91lIag6dSg1lsaXuGBxzR6w/7oh8V3B731U.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=83f78736f77f4007210f7b9eb33e6c3a&u=DRUomHyruqUHHhgBt3YB2x9z59w5jUIRUAZkZIC2kew&cs=400x400',
    };

    if (this.users) {
      this.users = [...this.users, createNewUser];
    }
  };
}

export const usersStore = new UsersStore();
