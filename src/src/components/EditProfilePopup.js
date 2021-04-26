import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm.js";

function  EditProfilePopup(props) {
	const currentUser = React.useContext(CurrentUserContext);
	const [name, setName]=React.useState();
	const [description , setDescription ]= React.useState();

	function handleChangeName(e) {
		setName(e.target.value)
	}

	function handleChangeDescription(e) {
		setDescription(e.target.value)
	}

	React.useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	 }, [currentUser]); 

	 function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();
	 
		// Передаём значения управляемых компонентов во внешний обработчик
		props.onUpdateUser({
		  name,
		  about: description,
		});
	 } 

return(
	<PopupWithForm name="edit" title="Редактировать профиль" isOpen={props.isOpen }  onClose ={props.onClose } onSubmit={handleSubmit}
		children={
		<>
			<input type="text" name="name" className="popup__input" required   id="name-input" onChange={handleChangeName} defaultValue={name}
			placeholder="Имя"/>
			<span className="popup__input-error" id='name-input-error'></span>
			<input type="text" name="about" className="popup__input" required   id="job-input" onChange={handleChangeDescription} defaultValue={description}
			placeholder="Вид деятельности"/>

			<span className="popup__input-error" id="job-input-error"></span>
			<button type="submit" className="popup__save-button popup__save-button_profile">Сохранить</button>
		</>}
	/>	
	)
}

export default EditProfilePopup;