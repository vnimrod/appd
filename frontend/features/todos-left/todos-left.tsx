import React from 'react';
import styles from './todos-left.module.scss';

type Props = {
  todosLeft: number;
};

export const TodosLeft = ({ todosLeft }: Props) => {
  return <span className={styles.todosLeft}>Left To Do: {todosLeft}</span>;
};
