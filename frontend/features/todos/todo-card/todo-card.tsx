import React from 'react';
import styles from './todo-card.module.scss';
import { Todo } from '../todos.model';

type Props = {
  todo: Todo;
};

export const TodoCard = ({ todo }: Props) => {
  return (
    <li className={styles.todoCard}>
      <span>{todo.text}</span>
      <span>{todo.createdTime}</span>
      <span>{todo.tags.map((tag) => `#${tag.text}`)}</span>
      <span>edit button</span>
      <span>delete button</span>
      <span>check button</span>
    </li>
  );
};
