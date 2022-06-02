import React from 'react';
import styles from './todos-section.module.scss';
import { Header } from './header';
import { TodoCardList } from '../todo-card-list';

export const TodosSection = () => {
  return (
    <section className={styles.todosSection}>
      <Header />
      <TodoCardList />
    </section>
  );
};
