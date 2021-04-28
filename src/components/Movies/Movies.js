import './Movies.css'
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'

export default function Movies(props){
   

   return(
      <>
      
      <div className="movie">
         <SearchForm handlerSubmit={props.handlerSubmit}/>   
         <Preloader/> 
         <MoviesCardList movies={props.movie}/>
      </div>
      </>
   )
}