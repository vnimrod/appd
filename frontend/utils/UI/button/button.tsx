import React, { MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLElement>;
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export const Button = (props: Props) => {
  return <button {...props}>{props.children}</button>;
};
