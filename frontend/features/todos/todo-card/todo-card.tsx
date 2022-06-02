import React from 'react';
import styles from './todo-card.module.scss';

export const TodoCard = () => {
  return (
    <li className={styles.todoCard}>
      <span>todo text</span>
      <div>
        <span>edit icon</span>
        <span>delete icon</span>
        <span>check icon</span>
      </div>
    </li>
  );
};
