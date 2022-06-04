import React from 'react';
import styles from './created-at.module.scss';

type Props = {
  time: string;
  classes: string;
};

export const CreatedAt = ({ time, classes }: Props) => {
  const timeFormat = () => {
    const date = new Date(time);
    return date.toLocaleDateString('he-IL');
  };

  return <span className={styles[classes]}>{timeFormat()}</span>;
};
