import { makeAutoObservable } from 'mobx';
import { mockComments } from '../MockData';
import { makePersistable } from 'mobx-persist-store';

class CommentsStore {
  comments = mockComments;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'CommentsStore', properties: ['comments'], storage: window.localStorage });
  }

  handleLeftComment = (id: number, comment: string) => {
    if (!comment) return;

    const getCurrentUser = () => {
      const user = sessionStorage.getItem('user');
      return user && JSON.parse(user).name;
    };

    const createNewComment = {
      commentId: this.comments.length + 1,
      postId: id,
      senderName: getCurrentUser(),
      time: '1 минуту назад',
      comment: comment,
    };

    if (this.comments) {
      this.comments = [...this.comments, createNewComment];
    }
  };
}

export const commentsStore = new CommentsStore();
