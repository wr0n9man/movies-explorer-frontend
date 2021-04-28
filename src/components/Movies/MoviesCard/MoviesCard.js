import './MoviesCard.css'
import iconSave from '../../../images/iconSaved.svg'

export default function MoviesCard(props){
   if (props.movie.image){
      var image=`https://api.nomoreparties.co${props.movie.image.url}`
   }
   return(
      <div className="moviesCard">
         <div className="moviesCard__info">
            <h3 className="moviesCard__name">{props.movie.nameRU}</h3>
            <span className="moviesCard__time">{props.movie.duration} минут</span>
         </div>
         <a  className="moviesCard__link" href={props.movie.trailerLink}>      
         <img className="moviesCard__img" src={image} alt={props.movie.nameRu}/>
         </a>   
         <button className={props.saved?"moviesCard__button moviesCard__button_active":"moviesCard__button"}>{props.saved?<img src={iconSave} alt='Сохранено'/>:"Сохранить"}</button>
      </div>
   )
}