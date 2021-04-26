import React from 'react';
import penPath from'../image/avatar-redact.svg'
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardContext  } from "../contexts/CardContext";



function Main(props) {	

	const currentUser = React.useContext(CurrentUserContext);
	const cards = React.useContext(CardContext);
	return(
		<>
		<main>
		<div className="spinner"><i></i></div>
		<div className="content">
		<section className="profile">
			<div className="profile__info">
				<button type="button"  className="profile__avatar-button" onClick={props.onEditAvatar}>
				<img src={penPath} alt="аватарка" className="profile__avatar_hover"/>
				<img src={currentUser.avatar?currentUser.avatar:''} alt="аватарка" className="profile__avatar"/>
			   </button>
				<div className="profile__redact">
					<h1 className="profile__name">{currentUser.name}</h1>
					<p className="profile__about">{currentUser.about}</p>
					<button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
				</div>

			</div>
			<button type="button" className="profile__add-button" onClick={props.onAddPlace} />
		</section>
		
		<section className="places">			
		{		
		cards.map((card)=>(
			<Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
			))}
 
		</section>
	</div>
				
	</main>
		</>
	)
}

export default Main