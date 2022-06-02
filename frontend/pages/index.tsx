import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TodosSection } from '../features/todos/todos-section';
import { store } from '../services/store';

const Index: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    store.todos.fetch();
  }, [store]);

  return mounted ? (
    <>
      <TodosSection />
    </>
  ) : null;
};

export default observer(Index);
