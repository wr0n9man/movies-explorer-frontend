import './MoviesSaveCard.css'
import iconDelete from '../../../images/unsaveIcon.svg'

export default function MoviesSaveCard(props){


   function handleDeleteMovie(){
      props.handleDeleteMovie(props.movie)
   }

   return(
      <div className="moviesSaveCard">
         <div className="moviesSaveCard__info">
            <h3 className="moviesSaveCard__name">{props.movie.nameRU}</h3>
            <span className="moviesSaveCard__time">{props.movie.duration} минут</span>
         </div>
         <a  className="moviesSaveCard__link" href={props.movie.trailerLink}>      
         <img className="moviesSaveCard__img" src={props.movie.image} alt={props.movie.nameRu}/>
         </a>   
         <button onClick={handleDeleteMovie} className="moviesSaveCard__button "><img src={iconDelete} alt='Удалить'/></button>
      </div>
   )
}