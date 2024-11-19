import React, { useState, useContext } from 'react';
import { PostData } from './PostData';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import styles from '../modules/PostWriter.module.css'

export default function PostWriter() {
  const { addPost } = useContext(PostData); // PostData에서 addPost 함수 가져오기
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const isFormComplete = author.trim() !== '' && title.trim() !== '' && content.trim() !== ''

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
    navigate('/post/list');
    /*
    setAuthor('');
    setTitle('');
    setContent('');
    */
  };
  
  return (
    <div className={styles.postWriter}>
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <label>
          작성자:
          <input
            className={styles.input}
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
            className={styles.input}
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
            className={styles.input}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <button 
          className={styles.button}
          type="submit"
          disabled={!isFormComplete}
        >
          게시글 등록
        </button>
      </form>
    </div>
  );
}
