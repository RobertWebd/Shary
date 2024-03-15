import { makeAutoObservable } from 'mobx';
import { mockPosts } from '../MockData';
import { makePersistable } from 'mobx-persist-store';

class PostsStore {
  posts = mockPosts;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'PostsStore', properties: ['posts'], storage: window.localStorage });
  }
}

export const postsStore = new PostsStore();
