import { NewsWrapper } from './NewsPage.styled';
import { Spin } from 'antd';
import { Posts } from '../../types';
import { Post } from '../../components';
import { observer } from 'mobx-react-lite';
import { postsStore } from '../../store';

export const NewsPage = observer(() => {
  const { posts } = postsStore;

  return (
    <NewsWrapper>
      {posts ? (
        posts?.map((currPosts: Posts) => {
          return <Post key={currPosts.postId} {...currPosts}></Post>;
        })
      ) : (
        <Spin />
      )}
    </NewsWrapper>
  );
});
