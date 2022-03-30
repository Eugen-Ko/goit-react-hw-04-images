import React from 'react';
import styles from './Button.module.css';

export default function Button ({handleLoadMore}) {
  return (
    <>
      <button type='button'
        className={styles.Button}
        onClick={() => handleLoadMore()}
        >
        Load more...
      </button>
    </>
  )
}
