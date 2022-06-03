import React, { ChangeEvent, useState } from 'react';
import styles from './todo-card.module.scss';
import Image from 'next/image';
import { Todo } from '../todos.model';
import { useStore } from '../../../services/store';
import { Button } from '../../../utils/UI/button';
import { Input } from '../../../utils/UI/input';
import icons from '../../../utils/UI/icons/icons.data.json';

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

  const onEdit = () => {
    setEditClicked(!editClicked);
  };

  const onEditTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditData({ ...editData, text: event.target.value });
  };

  const onCheckClick = () => {
    store.todos.update(todo.id, editData);
    setEditClicked(false);
  };

  const onDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      store.todos.delete(todo.id);
    }
  };

  return (
    <li className={styles.todoCard}>
      {editClicked ? (
        <Input onChange={onEditTodoTextChange} value={editData.text} />
      ) : (
        <span>{todo.text}</span>
      )}
      <span>{todo.createdTime}</span>
      <span>{todo?.tags?.map((tag) => `#${tag.text}`)}</span>
      <div>
        <Button onClick={onEdit} type="button">
          <Image {...icons.editIcon} />
        </Button>
        <Button onClick={onDelete} type="button">
          <Image {...icons.deleteIcon} />
        </Button>
        <Button onClick={onCheckClick} type="button">
          <Image {...icons.checkMarkIcon} />
        </Button>
      </div>
    </li>
  );
};
