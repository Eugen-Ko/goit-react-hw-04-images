import React, {Component} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import { fetchImages } from './service';

import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Loader from '../components/Loader';



class App extends Component {

  state = {
    imagesName: '',
    currentPage: 1,
    currentItems:[],
    isPanding: false,
    isModalOpen: false,
    modalImg: '',
    modalTags: '',
  }

  componentDidUpdate(propTypes, prevState) {
    if (this.state.isPanding) 
    {
      fetchImages(this.state)
      .then(response => 
        {this.setState(prev => ({currentItems: this.state.currentPage > 1 
          ? [...prev.currentItems, ...response.hits] 
          : response.hits
          , isPanding: false}))});
    }   
  }
      
  handleFormSubmit = (imagesName) => {
    this.setState({imagesName: imagesName, currentPage: 1, currentItems: [], isPanding: true});
  };
  
  handleTogleModal = (image, tags) => {
    this.setState(prev => ({isModalOpen: !prev.isModalOpen, modalImg: image, modalTags: tags}));
  };

  handleLoadMore = () => {
    this.setState(prev => ({currentPage: prev.currentPage + 1, isPanding: true}));
  };

  render () {
    const {currentItems, isModalOpen, modalImg, modalTags, isPanding} = this.state;
    const {handleFormSubmit, handleTogleModal, handleLoadMore} = this;

    return (
      <>
        <Searchbar handleFormSubmit={handleFormSubmit} />

        <ImageGallery 
          currentItems = {currentItems} 
          handleTogleModal = {handleTogleModal}
        />
        {currentItems.length >= 12 && 
          <Button 
            handleLoadMore = {handleLoadMore}
          />}
        {isModalOpen && <Modal 
          modalImg = {modalImg}
          modalTags = {modalTags}
          handleTogleModal = {handleTogleModal}
        />}
        <ToastContainer theme= "dark"
                        autoClose={2000}
        />
        {isPanding && <Loader />}
      </>  
    )
  }
}

export default App;
