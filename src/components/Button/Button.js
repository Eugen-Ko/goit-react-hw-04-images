import React from 'react';
import styles from './Button.module.css';

const Button = ({handleLoadMore}) => {
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

export default Button;