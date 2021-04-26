import React from 'react';
import {Redirect, Switch,Route, useHistory } from 'react-router-dom';
import Header from'./Header.js'
import Main from './Main.js'
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import InfoTooltip from "./InfoTooltip";
import api from "../utils/api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardContext } from "../contexts/CardContext";
import EditProfilePopup  from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Register from './Register.js'
import Login from './Login.js'
import ProtectedRoute from './ProtectedRoute.js';
import apiAuth from '../utils/apiAuth';

function App() {
	// //api.mesto.nomoredomains.club
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]= React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]= React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]= React.useState(false);
const [isCardPopupOpen, setIsCardPopupOpen]= React.useState(false);
const [isInfoTooltip, setIsInfoTooltip]= React.useState(false);
const [selectedCard , setSelectedCard ]= React.useState({name: '', link: ''});
const [currentUser, setCurrentUser ]= React.useState({});
const [currentEmail, setCurrentEmail ]= React.useState("email");
const [cards , setCards ]= React.useState([]);
const [result , setResult ]= React.useState(false)
const [loggedIn , setLoggedIn ]= React.useState(false)
const history = useHistory();

React.useEffect(()=>{
	handleTokenCheck()
}, []);

function handleEditProfileClick() {
	setIsEditProfilePopupOpen(true)
	
}

function handleLoggedIn() {
	setLoggedIn(!loggedIn);	
}

function handleSetFail(){
	setResult(false)
}

function handleSetSuccess(){
	setResult(true)
}
function handleSetEmail (values) {	
	setCurrentEmail(values)
}

function handleEditAvatarClick() {
	setIsEditAvatarPopupOpen(true);
}

function handleAddPlaceClick() {
	setIsAddPlacePopupOpen(true);
}
function handleCardClick (values) {	
	setSelectedCard(values)
	setIsCardPopupOpen(true)
}
function handleInfoTooltip() {
	setIsInfoTooltip(true);
}
function closeAllPopups() {
	setIsCardPopupOpen(false)	
	setIsAddPlacePopupOpen(false);
	setIsEditAvatarPopupOpen(false);
	setIsEditProfilePopupOpen(false);
	setIsInfoTooltip(false);
}

function handleUpdateUser (data) {
	
	api.sendUserInfo(data).then((values)=>{
		setCurrentUser(values)
		closeAllPopups();
	})
	.catch()
}

function  handleUpdateAvatar(data) {
	api.sendAvatar(data).then((values)=>{
		setCurrentUser(values)
		closeAllPopups();
	})
	.catch()
	
}

function handleAddPlace(data){
	api.sendPlace(data).then((value)=>{
		setCards([value,...cards]);
		closeAllPopups();
	})
	.catch()
}

function handleCardLike(card) {
	// Снова проверяем, есть ли уже лайк на этой карточке
	const isLiked = card.likes.some(i => i === currentUser._id);	
	// Отправляем запрос в aPI и получаем обновлённые данные карточки
	api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
		
		 // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
		const newCards = cards.map((c) => c._id === card._id ? newCard : c);
	  // Обновляем стейт
		setCards(newCards);
	})
	.catch();
}

function handleDeleteCard(card) {

	// Снова проверяем, есть ли уже лайк на этой карточке

	// Отправляем запрос в aPI и получаем обновлённые данные карточки
	api.deleteCard(card._id).then(() => {
		
		 // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
	  const newCards = cards.filter((c) => c._id !== card._id);
	  // Обновляем стейт
	  setCards(newCards);
	})
	.catch();
}

function  handleTokenCheck(){
	if (localStorage.getItem('token')){		
	const jwt = localStorage.getItem('token');	
	apiAuth.getUser(jwt).then((res)=>{
		handleSetEmail(res.email)
	if(res){	
			handleLoggedIn();			
			setCurrentUser(res);
			api.getInitialCards().then((values)=>{	
				setCards(values)
			}).catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
				console.log(err);
			})
			history.push('/main')
		}
		})
	.catch()
	}
}

function handleSubmitLogin(state){
	apiAuth.loginUsers(state)
	.then((data) => {
		
		handleSetEmail(state.email)
		if (data.token){
			handleTokenCheck(); 
			history.push('/main');
			}
		
		history.push('/main');
	})
	.catch((err)=>{

		handleSetFail()
		handleInfoTooltip()})
}

function handleSubmitRegister(state){
	apiAuth.registrationUsers(state)	
	.then((res) => {
		handleSetSuccess()
		handleInfoTooltip()
	})
	.catch((err)=>{				
		handleSetFail()
		handleInfoTooltip()})
}


   return (	
   	<CurrentUserContext.Provider value={currentUser}> 
			<CardContext.Provider value={cards}>
				<Header handleLogin={handleLoggedIn} email={`${currentEmail}`}/> 	
				<Switch>		
					<ProtectedRoute path="/main" loggedIn={loggedIn} component={Main} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleDeleteCard}/>	
					<Route path="/sign-up">
						<Register handleSubmitRegister={handleSubmitRegister} handleInfoTooltip={handleInfoTooltip} handleSetFail={handleSetFail} handleSetSuccess={handleSetSuccess}/>
					</Route>
					<Route path="/sign-in">
						<Login handleSubmitLogin={handleSubmitLogin} handleLogin={handleLoggedIn} handleInfoTooltip={handleInfoTooltip} handleSetFail={handleSetFail} handleSetSuccess={handleSetSuccess} handleSetEmail={handleSetEmail}/>
					</Route>
					<Route exact path="/">
            		{loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
          		</Route>
				</Switch>	
				<Footer />		
				<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />		
				<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/>
				<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>	
				<PopupWithForm name="delete" title="Вы уверены" children={<button type="submit" className="popup__delete-button">Да</button>} onClose ={closeAllPopups}/>
				<ImagePopup card={selectedCard} onClose ={closeAllPopups} isOpen={isCardPopupOpen}/>
				<InfoTooltip onClose={closeAllPopups} isOpen={isInfoTooltip} result={result} />
			</CardContext.Provider>
   		</CurrentUserContext.Provider>
	
   );
}

export default App;
