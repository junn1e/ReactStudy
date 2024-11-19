import React, { useState } from 'react';
import styles from '../modules/ToDoList.module.css';

export default function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (toDo.trim() === '') return;
    const newItem = {
      id: Date.now(),
      text: toDo,
      isChecked: false,
    };
    setItems([...items, newItem]);
    setToDo('');
  };

  const handleCheck = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <h1>To Do List</h1>
      <input
        type="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleAdd} className={styles.addButton}>추가</button>
      
      <div className={styles.toDoList}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheck(item.id)}
              className={styles.checkbox}
            />
            <span
              className={`${styles.text} ${item.isChecked ? styles.strikeThrough : ''}`}
            >
              {item.text}
            </span>
            <button onClick={() => handleDelete(item.id)} className={styles.removeButton}>
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
