const addMovieModal = document.getElementById('add-modal'),
      addModalTogglebtn = document.querySelector('header button'),
      backdropsDiv = document.body.firstElementChild,
      cancelModalbtn = addMovieModal.querySelector('.modal__actions').firstElementChild,
      addModalbtn = cancelModalbtn.nextElementSibling,
      movieContentSection = document.getElementById('entry-text')
      deleteModal = document.getElementById('delete-modal');
      
      
const modalInputs = addMovieModal.querySelectorAll('input');
let movies = [];

//Toggle modal
const movieModalToggle = () =>{
    addMovieModal.classList.toggle('visible');
};

//Toggle backdrops
const backdropsToggle = () =>{
    backdropsDiv.classList.toggle('visible');
};

const movieModalClose = ()=>{
    addMovieModal.classList.remove('visible');
};

const OnAddMovieModalBtnClick = () => {
    movieModalToggle();
    backdropsToggle();
};

const onBackdropsClick = ()=>{
    movieModalClose();
    backdropsToggle();
    clearInputs();
};

const onCancelModalBtnClick = () =>{
    movieModalToggle();
    backdropsToggle();
    clearInputs();
};



const movieMessageToggle = () =>{
    if(movies.length){
        movieContentSection.style.display = 'none';
    }
    else{
        movieContentSection.style.display = 'block';
    }
};

const clearInputs= ()=>{
    for(let inputItem of modalInputs){
        inputItem.value = '';
    }
};

const updateLocalMovieCollection = title =>{
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.title === title){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
};

const openDeleteModal = ()=>{
    deleteModal.classList.add('visible');
}

const onCancelDeleteMovie = ()=>{
    deleteModal.classList.remove('visible');
    backdropsToggle();
};

const onConfirmDeleteMovie = element => {
    element.parentElement.removeChild(element);
    deleteModal.classList.toggle('visible');
    updateLocalMovieCollection();
    backdropsToggle();
    movieMessageToggle();
};
const onDeleteMovie = element =>{
    const deleteModalNobtn = deleteModal.querySelector('.btn--passive'),
          deleteModalYesbtn = deleteModal.querySelector('.btn--danger');
    openDeleteModal();
    backdropsToggle();

    deleteModalNobtn.addEventListener('click',onCancelDeleteMovie);

    deleteModalYesbtn.addEventListener('click', onConfirmDeleteMovie.bind(null,element));
  
}

const updateMovieInUI= (newMovie) =>{
    movieMessageToggle();
    const movieUl = document.getElementById('movie-list');
    let movieElement = document.createElement('li');
    movieElement.innerHTML = `<div class="movie-element__image">
    <img src="${newMovie.posterUrl}" alt="${newMovie.title}">
    </div>
    <div class="movie-element__info">
      <h2>${newMovie.title}</h2>
      <p>${newMovie.rating}/5 stars</p>
    </div>`;
    movieElement.addEventListener('click', onDeleteMovie.bind(null,movieElement));
    movieUl.appendChild(movieElement);
    
};

const onAddModalBtnclick = () => {
  // console.log(modalInputs);
  let movieTitle = modalInputs[0].value;
  let moviePosterURL = modalInputs[1].value;
  let movieRating = modalInputs[2].value;

  if(movieTitle ==='' || moviePosterURL === '' || 
    movieRating === '' ||
    +movieRating < 1 || +movieRating > 5){
        alert('Invalid movie Details - Please check');
        return;
    }

  let newMovie = {
    title: movieTitle,
    posterUrl: moviePosterURL,
    rating: movieRating,
  };
  movies.push(newMovie);
  updateMovieInUI(newMovie);
  clearInputs();
  //close movie  modal
  movieModalToggle();
  backdropsToggle();
  
};


addModalTogglebtn.addEventListener('click' , OnAddMovieModalBtnClick);
backdropsDiv.addEventListener('click', onBackdropsClick );
cancelModalbtn.addEventListener('click', onCancelModalBtnClick);
addModalbtn.addEventListener('click', onAddModalBtnclick);