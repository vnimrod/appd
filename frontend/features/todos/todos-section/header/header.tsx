import React from 'react';
import styles from './header.module.scss';
import texts from '../../todos.texts.json';

export const Header = () => {
  return <div className={styles.header}>{texts.headerText}</div>;
};
