import React, { ChangeEvent, useState } from 'react';
import styles from './todo-card.module.scss';
import Image from 'next/image';
import { Todo } from '../todos.model';
import { useStore } from '../../../services/store';
import { Button } from '../../../utils/UI/button';
import { Input } from '../../../utils/UI/input';
import icons from '../../../utils/UI/icons/icons.data.json';
import texts from '../todos.texts.json';
import cn from 'classnames';

type Props = {
  todo: Todo;
};

export const TodoCard = ({ todo }: Props) => {
  const store = useStore();

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [editData, setEditData] = useState({
    text: todo?.text || '',
    completed: false,
  });

  const onEdit = () => {
    setIsEditClicked(!isEditClicked);
  };

  const onEditTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditData({ ...editData, text: event.target.value });
  };

  const onCheckClick = () => {
    if (editData.text && editData.text !== todo.text) {
      store.todos.update(todo.id, editData);
    }
    setIsEditClicked(false);
  };

  const onDelete = () => {
    if (window.confirm(texts.windowsConfirmMessage)) {
      store.todos.delete(todo.id);
    }
  };

  const timeFormat = () => {
    const date = new Date(todo.createdTime);
    return date.toLocaleDateString('he-IL');
  };

  const onCompleted = () => {
    setEditData({ ...editData, completed: !editData.completed });
    store.todos.update(todo.id, editData);
  };

  return (
    <li className={styles.todoCard}>
      {isEditClicked ? (
        <div className={styles.editInput}>
          <Input onChange={onEditTodoTextChange} value={editData.text} />
        </div>
      ) : (
        <span
          className={cn(styles.todoText, todo.completed && styles.completed)}
        >
          {todo.text}
        </span>
      )}
      <span className={styles.date}>{timeFormat()}</span>
      <span className={styles.tags}>
        {todo?.tags?.map((tag) => `#${tag.text} `)}
      </span>
      <div className={styles.buttons}>
        {isEditClicked && (
          <>
            <Button
              onClick={onCompleted}
              classes={todo.completed || editData.completed ? 'completed' : ''}
            >
              completed
            </Button>
            <Button onClick={onCheckClick} type="button">
              <Image {...icons.checkMarkIcon} />
            </Button>
          </>
        )}
        <Button onClick={onEdit} type="button">
          <Image {...icons.editIcon} />
        </Button>
        <Button onClick={onDelete} type="button">
          <Image {...icons.deleteIcon} />
        </Button>
      </div>
    </li>
  );
};
