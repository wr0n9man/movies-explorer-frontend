import './MoviesCard.css'
import iconSave from '../../../images/iconSaved.svg'
import { useState } from "react";

export default function MoviesCard(props){
   const [saved, setSaved]= useState(false)

   if (props.movie.image){
      var image=`https://api.nomoreparties.co${props.movie.image.url}`
   }
  
   function handleDeleteMovie(){      
      props.handleDeleteMovie(props.movie,setSaved)
   }


   function handleSaveCard(){    
      props.handleSaveMovie(props.movie,setSaved); 
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
         {(saved || props.movie.saved)?
         <>
         <button  onClick={handleDeleteMovie} className="moviesCard__button moviesCard__button_active"><img src={iconSave} alt='Сохранено'/></button>
         </>:
         <>
         <button  onClick={handleSaveCard} className="moviesCard__button">Сохранить</button>
         </>}  
         
      </div>
   )
}