import React, {Component} from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';

import styles from './Modal.module.css';

class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModuleByESC)
  }
 
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModuleByESC)
  }

  onCloseModuleByESC = (e) => {
    if (e.keyCode === 27) this.props.handleTogleModal('','')
  }

  render () {
    const {modalImg, modalTags, handleTogleModal} = this.props;
    return (

      <div className={styles.Overlay} 
            onClick={(e) => {if (e.target === e.currentTarget) handleTogleModal('','')}}
          >
        <div className={styles.Modal}>
          <img src={modalImg} alt={modalTags} />
          <BsFillXCircleFill className={styles.Svg} onClick={() => handleTogleModal('','')} />
        </div>
      </div>
    )
  }
}

export default Modal;