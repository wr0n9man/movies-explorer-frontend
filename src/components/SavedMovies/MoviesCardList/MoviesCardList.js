import MoviesSaveCard from '../MoviesSaveCard/MoviesSaveCard'
import '../../Movies/MoviesCardList/MoviesCardList.css'

export default function MoviesCardList(props){
   return(
      <div className="moviesCardList">
         <div className="moviesCardList__grid">
         {
            props.myMovies.slice(0,props.movieCount).map((movie)=>(            
               <MoviesSaveCard handleDeleteMovie={props.handleDeleteMovie} key={movie.movieId} movie={movie} />
            ))
         }
         </div>
         <button className="moviesCardList__button">Ещё</button>
      </div>
   )
}