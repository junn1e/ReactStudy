import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostData } from '../components/Post/components/PostData';

export default function PostViewPage() {
  const { uuid } = useParams();
  const { posts } = useContext(PostData);

  const post = posts.find((item) => item.id === uuid);

  if (!post) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}
