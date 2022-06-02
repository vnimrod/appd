import React from 'react';
import styles from './todos-section.module.scss';
import { observer } from 'mobx-react-lite';
import { Header } from './header';
import { TodoCardList } from '../todo-card-list';
import { useStore } from '../../../services/store';

export const TodosSection = observer(() => {
  const store = useStore();
  return (
    <section className={styles.todosSection}>
      <Header />
      <TodoCardList todos={store.todos?.list} />
    </section>
  );
});
