import React from 'react';
import styles from './main-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <main className={styles.root}>{children}</main>;
};
