import React from 'react';
import styles from './tags.module.scss';
import type { Tag } from '../todos/todos.model';

type Props = {
  tags: Tag[];
};

export const Tags = ({ tags }: Props) => {
  return (
    <span className={styles.tags}>{tags?.map((tag) => `#${tag?.text} `)}</span>
  );
};
