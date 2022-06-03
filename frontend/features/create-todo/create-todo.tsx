import React, { ChangeEvent, useState } from 'react';
import { useStore } from '../../services/store';
import styles from './create-todo.module.scss';
import type { FormData } from '../../services/todos/todos';
import { Button } from '../../utils/UI/button';
import { Input } from '../../utils/UI/input';

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
      <Input
        value={formData.text}
        onChange={(event) => setFormData({ text: event.target.value })}
        placeholder={'Create New Todo'}
      />
      <div className={styles.addButton}>
        <Button type="submit">ADD</Button>
      </div>
    </form>
  );
};
