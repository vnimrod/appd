import React from 'react';
import styles from './todos-section.module.scss';
import { Header } from './header';
import { TodoCardList } from '../todo-card-list';
import { useStore } from '../../../services/store';
import { observer } from 'mobx-react-lite';

export const TodosSection = observer(() => {
  const store = useStore();
  return (
    <section className={styles.todosSection}>
      <Header />
      <TodoCardList todos={store.todos?.list} />
    </section>
  );
});
