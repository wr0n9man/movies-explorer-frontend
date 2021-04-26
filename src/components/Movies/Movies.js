import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'

export default function Movies(){
   return(
      <>
      
      <div className="movie">
         <SearchForm/>    
         <MoviesCardList/>
      </div>
      </>
   )
}