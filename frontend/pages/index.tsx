import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { store } from '../services/store';
import { TodosSection } from '../features/todos/todos-section';
import { Search } from '../components/search';
import { CreateTodo } from '../features/create-todo';

const Index: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    store.todos.fetch();
  }, [store]);
  return mounted ? (
    <>
      <CreateTodo />
      <Search fetchData={store.todos.fetch} />
      <TodosSection />
    </>
  ) : null;
};

export default observer(Index);
