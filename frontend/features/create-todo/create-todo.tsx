import React, { ChangeEvent, useState } from 'react';
import { useStore } from '../../services/store';
import styles from './create-todo.module.scss';
import type { FormData } from '../../services/todos/todos';

export const CreateTodo = () => {
  const store = useStore();
  const [formData, setFormData] = useState<FormData>({
    text: '',
  });
  const addNewTodo = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    await store.todos.add(formData);
    setFormData({ ...formData, text: '' });
  };
  return (
    <form className={styles.createTodo} onSubmit={addNewTodo}>
      <input
        value={formData.text}
        onChange={(event) => setFormData({ text: event.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
};
