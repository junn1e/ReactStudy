import React, { useState, useContext } from 'react';
import { PostData } from './PostData';
import { v4 as uuidv4 } from 'uuid';

export default function PostWriter() {
  const { addPost } = useContext(PostData); // PostData에서 addPost 함수 가져오기
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: uuidv4(),
      author,
      title,
      content,
      answer: '',
      isDone: false
    };
    
    addPost(newPost);
    setAuthor('');
    setTitle('');
    setContent('');
  };
  
  return (
    <div>
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <label>
          작성자:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          제목:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          내용:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">게시글 등록</button>
      </form>
    </div>
  );
}
