import React from 'react';

import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
	const [place, setPlace]=React.useState("");
	const [link , setLink]= React.useState("");

	function handleChangePlace(e) {
		setPlace(e.target.value)
	}

	function handleChangeLink(e) {
		setLink(e.target.value)
	}


	function handleSubmit(e) {
		
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();
		
		// Передаём значения управляемых компонентов во внешний обработчик
		props.onAddPlace({
		 name: place,
		 link
		});
	 } 




	return(<PopupWithForm name="new-card" title="Новое место"  isOpen={props.isOpen} onClose ={props.onClose} onSubmit={handleSubmit}
	children={
	<>
		<input type="text" name="name" className="popup__input" placeholder="Название" value={place} onChange={handleChangePlace} id="place-input"/>

				<span className="popup__input-error" id="place-input-error"></span>
				<input type="url" name="link" className="popup__input" placeholder="Ссылка на картинку" required value={link} onChange={handleChangeLink} id="link-input"/>
				<span className="popup__input-error" id="link-input-error"></span>

				<button type="submit"
					className="popup__save-button popup__save-button_gallery ">Создать</button>
	</>}
	/>)
}

export default AddPlacePopup;