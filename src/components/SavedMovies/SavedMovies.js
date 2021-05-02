import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import '../Movies/Movies.css'
import SearchForm from './SearchForm/SearchForm.js'
import Preloader from '../Movies/Preloader/Preloader.js'


export default function SavedMovies(props){


   return(
      <div className="movie">
         <SearchForm handlerSubmit={props.handlerSubmit}/>
         <Preloader render={props.render}/> 
         <MoviesCardList info={props.info} handleDeleteMovie={props.handleDeleteMovie} myMovies={props.myMovie}/>
      
      </div>
   )
}