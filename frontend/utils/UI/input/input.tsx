import React, { ChangeEventHandler } from 'react';

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

export const Input = (props: Props) => {
  return <input {...props} />;
};
