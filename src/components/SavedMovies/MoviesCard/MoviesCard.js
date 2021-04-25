import './MoviesCard.css'
import unsaveIcon from '../../../images/unsaveIcon.svg'

export default function MoviesCard(props){
   return(
      <div className="moviesCard">
         <div className="moviesCard__info">
            <h3 className="moviesCard__name">{props.name}</h3>
            <span className="moviesCard__time">{props.time} минут</span>
         </div>         
         <img className="moviesCard__img" src={props.image} alt={props.name}/>
         <button className="moviesCard__saveButton"><img src={unsaveIcon} alt='Сохранено'/></button>
      </div>
   )
}