import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../modules/PostList.module.css"
import { PostData } from './PostData';

import { useNavigate } from 'react-router-dom';

export default function PostList() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const { posts } = useContext(PostData);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();
  return (
    <div className={styles.board}>
    
      <table className={styles.header}>
        <thead>
          <tr>
            <th>이름</th>
            <th>내용</th>
            <th>해결여부</th>
          </tr>
        </thead>
      </table>

      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td>{item.author}</td>
                <td>
                  <Link to={`/post/view/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.title}
                  </Link>
                </td>
                <td>{item.isDone ? "O" : "X"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.pageButton}>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button 
        className={styles.postWritePageButton}
        onClick={() => navigate('/post/write')}
        >
          글쓰기
        </button>
        
      </div>


    </div>
  );
}
