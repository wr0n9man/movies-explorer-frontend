import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import '../Movies/Movies.css'
import SearchForm from '../Movies/SearchForm/SearchForm.js'


export default function SavedMovies(){
   return(
      <div className="movie">
         <SearchForm/>
         <MoviesCardList/>
      
      </div>
   )
}