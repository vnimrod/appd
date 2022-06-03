import React, { ChangeEvent } from 'react';
import styles from './search.module.scss';

type Props = {
  fetchData: (event: string) => void;
};

export const Search = ({ fetchData }: Props) => {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      fetchData(event.target.value);
    }, 200);
  };

  return (
    <div className={styles.searchInput}>
      <input type="text" onChange={onInputChange} />
    </div>
  );
};
