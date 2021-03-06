import React from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../../../services/store';
import styles from './todos-section.module.scss';
import { Header } from './header';
import { TodoCardList } from '../todo-card-list';
import { TodosLeft } from '../../todos-left';

export const TodosSection = observer(() => {
  return (
    <section className={styles.todosSection}>
      <Header />
      <TodoCardList todos={store.todos.list} />
      <TodosLeft todosLeft={store.todos.list.length} />
    </section>
  );
});
