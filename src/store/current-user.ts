import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class CurrentUserStore {
  currentUser: number | null = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'CurrentUserStore', properties: ['currentUser'], storage: window.localStorage });
  }

  setCurrentUser = (id: number | null) => {
    this.currentUser = id;
  };
}

export const currentUserStore = new CurrentUserStore();
