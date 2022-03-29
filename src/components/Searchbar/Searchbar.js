import React, {Component} from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';


import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    imagesName: '',
  }

  handlerInput = e => {
    this.setState({ imagesName: e.currentTarget.value.toLowerCase().trim() });
  }

  handlerSubmit = e => {
    e.preventDefault(e);
    if (this.state.imagesName === '') {
      toast.error('Input name of image');
      return;
    }
    this.props.handleFormSubmit(this.state.imagesName);
    e.target[1].value = '';
  }

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handlerSubmit}>
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
            onChange={this.handlerInput}
          />
        </form>
      </header>
    )
  }

}