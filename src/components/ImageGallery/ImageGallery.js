import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({currentItems, handleTogleModal,}) {
  
  return (
    <ul className={styles.ImageGallery}>
      {currentItems.map(({id, webformatURL,tags, largeImageURL}) => (<ImageGalleryItem 
        key = {id}
        img = {webformatURL}
        tags = {tags}
        modalImg = {largeImageURL}
        handleTogleModal = {handleTogleModal}
      />))}
    </ul>    
  )
}