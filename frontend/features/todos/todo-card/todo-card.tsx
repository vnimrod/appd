import React, { ChangeEvent, useState } from 'react';
import styles from './todo-card.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { Todo } from '../todos.model';
import { useStore } from '../../../services/store';
import { Button } from '../../../utils/UI/button';
import { Input } from '../../../utils/UI/input';
import { Tags } from '../../tags';
import { CreatedAt } from '../../created-at';
import icons from '../../../utils/UI/icons/icons.data.json';
import texts from '../todos.texts.json';

type Props = {
  todo: Todo;
};

export const TodoCard = ({ todo }: Props) => {
  const store = useStore();

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [editData, setEditData] = useState({
    text: todo?.text || '',
    completed: todo.completed,
  });

  const onEdit = () => {
    setIsEditClicked(!isEditClicked);
  };

  const onEditTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditData({ ...editData, text: event.target.value });
  };

  const onCheckClick = () => {
    store.todos.update(todo.id, editData);
    setIsEditClicked(false);
  };

  const onDelete = () => {
    if (window.confirm(texts.windowsConfirmMessage)) {
      store.todos.delete(todo.id);
    }
  };

  const onCompleted = () => {
    setEditData({ ...editData, completed: !editData.completed });
  };

  return (
    <li className={styles.todoCard}>
      {isEditClicked ? (
        <div className={styles.editInput}>
          <Input onChange={onEditTodoTextChange} value={editData.text} />
        </div>
      ) : (
        <span
          className={cn(
            styles.todoText,
            editData.completed && styles.completed
          )}
        >
          {todo.text}
        </span>
      )}
      <Tags tags={todo?.tags ? todo.tags : []} />
      <CreatedAt time={todo.createdTime} classes={'topRight'} />

      <div className={styles.buttons}>
        {isEditClicked && (
          <>
            <Button
              onClick={onCompleted}
              classes={editData.completed ? 'completed' : ''}
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
