import React, { useState } from 'react';
import { PostData } from './PostData';
import { v4 as uuidv4 } from 'uuid';

export const PostManager = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: uuidv4(), author: 'Jeong', title: '안녕하세요?', content: '반갑습니다. 정동준입니다.', answer: '' , isdone: false},
    { id: uuidv4(), author: 'dong', title: '제육', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'dong', title: '피자', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'hyun', title: '탕수육', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'gun2', title: '만둣국', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: '123543', title: '돈가스', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'addve', title: '햄버거', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'azxczxc', title: '새우탕', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'hello', title: '도시락', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'aaaaaa', title: '김치사발면', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'onz', title: '육개장', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'cheon', title: '리액트', content: '점심 좀 추천해주세요', answer: '' , isdone: false},
    { id: uuidv4(), author: 'joon', title: '심심해', content: '너무심심해요, 심심할 때는 뭘 하고 놀면 좋을까요?', answer: '' , isdone: false}
  ]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
  
  return (
    <PostData.Provider value={{ posts, addPost }}>
      {children}
    </PostData.Provider>
  );
};
