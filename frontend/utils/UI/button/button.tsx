import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

type Props = {
  onClick?: MouseEventHandler<HTMLElement>;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  classes?: string;
};

export const Button = (props: Props) => {
  const { classes = '', ...rest } = props;

  return (
    <button className={cn(styles.button, styles[classes])} {...rest}>
      {props.children}
    </button>
  );
};
