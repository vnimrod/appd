import React, { ChangeEvent, useState } from 'react';
import styles from './todo-card.module.scss';
import { Todo } from '../todos.model';
import { useStore } from '../../../services/store';

type Props = {
  todo: Todo;
};

export const TodoCard = ({ todo }: Props) => {
  const store = useStore();

  const [editClicked, setEditClicked] = useState(false);
  const [editData, setEditData] = useState({
    text: todo?.text || '',
    completed: false,
  });

  const onEditClick = () => {
    setEditClicked(!editClicked);
  };

  const onEditTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditData({ ...editData, text: event.target.value });
  };

  const onCheckClick = () => {
    store.todos.update(todo.id, editData);
    setEditClicked(false);
  };

  return (
    <li className={styles.todoCard}>
      {editClicked ? (
        <input onChange={onEditTodoChange} value={editData.text} />
      ) : (
        <span>{todo.text}</span>
      )}
      <span>{todo.createdTime}</span>
      <span>{todo?.tags?.map((tag) => `#${tag.text}`)}</span>
      <button onClick={onEditClick}>edit button</button>
      <button>delete button</button>
      <button onClick={onCheckClick}>check button</button>
    </li>
  );
};
