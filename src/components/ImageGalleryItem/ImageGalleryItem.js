import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({img, tags, modalImg, handleTogleModal}) {

  return (
    <li className={styles.ImageGalleryItem} onClick = {() => handleTogleModal(modalImg, tags)}>
      <img src={img} alt={tags} className={styles.ImageGalleryItemImage}/>
    </li>
  )
}