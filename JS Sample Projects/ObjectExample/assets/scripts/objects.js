const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');
const movieList = [];



const renderMovie = (filter = '') =>{

  const movieUlist = document.getElementById('movie-list');

  if(!movieList.length){
      movieUlist.classList.remove('visible');
      return;
  }
  movieUlist.innerHTML = '';

  let filterdMovieList = filter !== '' ?
      movieList.filter(m => {
          const mTitle = m.info.title.toLowerCase();
          return mTitle.includes(filter.toLowerCase());
      }) :
      movieList;

  filterdMovieList.forEach(m => {
    const { getFormattedTitle } = m;  //Object Destrucuring
    let movieTitle = getFormattedTitle.call(m);     //m.getFormattedTitle();
    for(const key in m.info)
    {
      if(key !== 'title')
      {
        movieTitle += `: ${key} :  ${m.info[key]}`;
      }
    }
    let movieLiItem = document.createElement('li');
    movieLiItem.textContent = movieTitle;
    movieUlist.appendChild(movieLiItem);
  });
  movieUlist.classList.add('visible');
};

const prePopulatedList = ()=>{
  let newMovies = [{
    info :{
      title: 'Troy',
      rating: '4.5'
    },
    getFormattedTitle(){
      return this.info.title.toLocaleLowerCase();
    }
    
  },
  {
    info :{
      title: 'Final Destination',
      rating: '3'
    },
    getFormattedTitle(){
      return this.info.title.toLocaleLowerCase();
    }
    
  } ];

  movieList.push(...newMovies);
  renderMovie();
};

prePopulatedList();

const clearInputs = () =>{
  const inputSection = document.getElementById('user-input')
                          .querySelectorAll('input');
  
  for(const inputControl of inputSection){
      inputControl.value = '';
  }

}

const onAddNewMoview = () =>{

  const title = document.getElementById('title').value;
  const extraInfoName = document.getElementById('extra-name').value;
  const extraInfo = document.getElementById('extra-value').value;

  if(title === '' || extraInfo === '' 
  || extraInfoName === ''){
    return;
  }

  let newMovie = {
    info :{
      title,
      [extraInfoName] : extraInfo
    },
    getFormattedTitle : function(){
      return this.info.title.toLowerCase();
    }
  };
  movieList.push(newMovie);
  renderMovie();
  clearInputs();
}; 

const onSearchMoview = () => {
  console.log(this) //this will reperesent Button
  const filterText =  document.getElementById('filter-title').value;
  renderMovie(filterText);
};


addMovieBtn.addEventListener('click' , onAddNewMoview);
searchMovieBtn.addEventListener('click', onSearchMoview);