import './Movies.css'
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'

export default function Movies(props){    
   return(
   <>      
      <div className="movie">
         <SearchForm handlerShortFilm={props.handlerShortFilm} handlerSubmit={props.handlerSubmit}/>   
         <Preloader render={props.render}/> 
         <MoviesCardList movies={props.movie} myMovie={props.myMovie} handleDeleteMovie={props.handleDeleteMovie} handleSaveMovie={props.handleSaveMovie} info={props.info} handleSetMore={props.handleSetMore} addMovie={props.addMovie} more={props.more} render={props.render} className={props.render&&"movie__list_render"} movieCount={props.movieCount} setMovieCount={props.setMovieCount}/>
      </div>
   </>
   )
}