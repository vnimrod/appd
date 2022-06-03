import React, { ChangeEventHandler } from 'react';
import styles from './input.module.scss';

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
};

export const Input = (props: Props) => {
  return <input className={styles.input} {...props} />;
};
