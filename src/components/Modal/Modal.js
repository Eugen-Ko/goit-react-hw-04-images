import {useEffect} from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';

import styles from './Modal.module.css';

export default function Modal({modalImg, modalTags, handleTogleModal}) {

  const onCloseModuleByESC = (e) => {if (e.keyCode === 27) handleTogleModal('','')};
 
  useEffect(() => {
      window.addEventListener('keydown', onCloseModuleByESC);
      return () => {window.removeEventListener('keydown', onCloseModuleByESC)}
    }
  )

  return (
    <div className={styles.Overlay} 
          onClick={(e) => {if (e.target === e.currentTarget) handleTogleModal('','')}}
        >
      <div className={styles.Modal}>
        <img src={modalImg} alt={modalTags} width="100%" />
        <BsFillXCircleFill className={styles.Svg} onClick={() => handleTogleModal('','')} />
      </div>
    </div>
  )
}
