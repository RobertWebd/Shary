import { makeAutoObservable } from 'mobx';
import { mockFriends } from '../MockData';
import { getIdByName, getNameById } from '../utils';
import { makePersistable } from 'mobx-persist-store';

class FriendsStore {
  friends = mockFriends;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'FriendsStore', properties: ['friends'], storage: window.localStorage });
  }

  deleteFriend = (currentUser: number | null, name: string | undefined) => {
    this.friends.forEach((friend) => {
      if (friend.id === currentUser) {
        friend.friends = friend.friends.filter((id) => id !== getIdByName(name));
      }

      if (friend.id === getIdByName(name)) {
        friend.friends = friend.friends.filter((id) => id !== currentUser);
      }
    });
  };

  addFriend = (currentUser: number | null, name: string) => {
    const isCurrenUserSet = this.friends.some((friend) => friend.id === currentUser);
    if (!isCurrenUserSet) {
      const newFriendUser = {
        id: this.friends.length + 1,
        name: getNameById(currentUser),
        friends: [],
      };
      this.friends = [...this.friends, newFriendUser];
    }
    this.friends.forEach((friend) => {
      if (friend.id === currentUser) {
        friend.friends = [...friend.friends, getIdByName(name)];
      }

      if (friend.id === getIdByName(name)) {
        friend.friends = [...friend.friends, currentUser];
      }
    });
  };
}

export const friendsStore = new FriendsStore();
