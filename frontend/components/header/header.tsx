import React from 'react';
import styles from './header.module.scss';
import texts from './header.texts.json';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span>{texts.title}</span>
    </header>
  );
};
