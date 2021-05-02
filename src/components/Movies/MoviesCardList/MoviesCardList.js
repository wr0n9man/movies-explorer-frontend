import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList(props){



   function addCardMovies(){
      props.setMovieCount(props.movieCount+props.addMovie);   
      props.handleSetMore() 
   }

   return(
      <div className={props.render?"moviesCardList moviesCardList_active":"moviesCardList"}>
         <span>{props.info}</span>
         <div className="moviesCardList__grid">
         {
            props.movies.slice(0,props.movieCount).map((movie)=>(            
               <MoviesCard handleDeleteMovie={props.handleDeleteMovie} handleSaveMovie={props.handleSaveMovie} key={movie.id} movie={movie} />
            ))
         }
         </div>
         <button className={props.more?"moviesCardList__button moviesCardList__button_active":"moviesCardList__button"} onClick={addCardMovies}>Ещё</button>
      </div>
   )
}