import './MoviesCard.css'
import iconSave from '../../../images/iconSaved.svg'

export default function MoviesCard(props){
   return(
      <div className="moviesCard">
         <div className="moviesCard__info">
            <h3 className="moviesCard__name">{props.name}</h3>
            <span className="moviesCard__time">{props.time} минут</span>
         </div>         
         <img className="moviesCard__img" src={props.image} alt={props.name}/>
         <button className={props.saved?"moviesCard__button moviesCard__button_active":"moviesCard__button"}>{props.saved?<img src={iconSave} alt='Сохранено'/>:"Сохранить"}</button>
      </div>
   )
}