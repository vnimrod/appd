import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  onClick?: MouseEventHandler<HTMLElement>;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const Button = (props: Props) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};
