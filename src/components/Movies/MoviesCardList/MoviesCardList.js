import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList(props){
  

   return(
      <div className="moviesCardList">
         <div className="moviesCardList__grid">
         {  
            props.movies.map((movie)=>(
               <MoviesCard key={movie.id} movie={movie}/>
            ))
         }
         </div>
         <button className="moviesCardList__button">Ещё</button>
      </div>
   )
}