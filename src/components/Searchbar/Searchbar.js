import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';


import styles from './Searchbar.module.css';

export default function Searchbar({handleFormSubmit}) {

  const [imagesName, setImagesName] = useState('');

  const handlerSubmit = e => {
    e.preventDefault(e);
    if (imagesName === '') {
      toast.error('Input name of image');
      return;
    }
    handleFormSubmit(imagesName);
    e.target[1].value = '';
  }

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handlerSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <BsSearch style={{width: 20, height: 20}} />
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setImagesName(e.currentTarget.value.toLowerCase().trim())}
        />
      </form>
    </header>
  )

}
