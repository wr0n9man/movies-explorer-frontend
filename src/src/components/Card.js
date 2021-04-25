import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Card(props) {
	const currentUser = React.useContext(CurrentUserContext);

	function handleClick() {
		props.onCardClick(props.card);
	 } 

	function handleCardLike() {
		props.onCardLike(props.card);
	}

	function handleCardDelete() {
		props.onCardDelete(props.card);
	}

	const isOwn = props.card.owner === currentUser._id;
	const cardDeleteButtonClassName = (`place__delete ${isOwn ? 'place__delete_active' : ''}`
	); 
	const isLiked = props.card.likes.some(i => i === currentUser._id);
	const cardLikeButtonClassName = `place__counter_button ${isLiked?'place__counter_button_active':''}`; 
	return(
		<>
<div >
  <div className="place">
	  <button type="button" className="place__open" onClick={handleClick}><img src={props.card.link} alt={props.card.name} className="place__image"/></button>
	  <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}/>
	  <div className="place__main">
		  <h3 className="place__name">{props.card.name}</h3>
		  <div className="place__counter">
			  <button type="button" className={cardLikeButtonClassName} onClick={handleCardLike}/>
			  <span className="place__counter_like">{props.card.likes.length}</span>
		  </div>
		  
	  </div>
  </div>
</div>
		</>
	)
}

export default Card