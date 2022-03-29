export const fetchImages = ({imagesName, currentPage}) => {
  return fetch(`https://pixabay.com/api/?q=${imagesName}&page=${currentPage}&key=25767240-90986d6ba668a96ce49d502f6&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {return response.json()})
}