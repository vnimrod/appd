import React from 'react';
import styles from './todo-card-list.module.scss';
import { TodoCard } from '../todo-card/todo-card';
import type { Todo } from '../todos.model';

type Props = {
  todos: Todo[];
};

export const TodoCardList = ({ todos }: Props) => {
  return (
    <ul className={styles.todoCardList}>
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
