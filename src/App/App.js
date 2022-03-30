import {useState, useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import { fetchImages } from './service';

import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Loader from '../components/Loader';

export default function App() {

  const [imagesName, setImagesName] = useState('');
  const [currentPage, setCurrenPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [isPanding, setIsPanding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImage] = useState('');
  const [modalTags, setModalTags] = useState('');
  
  useEffect(
    () => {
      if (isPanding) 
      { 
        fetchImages({imagesName, currentPage})
        .then(response => 
          {currentPage > 1 
            ? setCurrentItems([...currentItems, ...response.hits]) 
            : setCurrentItems(response.hits);
            setIsPanding(false)
          });
      }   
    }
  , [currentPage, imagesName]);  
      
  const handleFormSubmit = (imagesName) => {
    setImagesName(imagesName);
    setCurrenPage(1);
    setCurrentItems([]);
    setIsPanding(!isPanding);
  };
  
  const handleTogleModal = (image, tags) => {
    setIsModalOpen(!isModalOpen);
    setModalImage(image);
    setModalTags(tags);
  };

  const handleLoadMore = () => {
    setCurrenPage(currentPage + 1);
    setIsPanding(!isPanding);
  };

  return (
    <>
      <Searchbar handleFormSubmit={handleFormSubmit} />      <ImageGallery 
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
