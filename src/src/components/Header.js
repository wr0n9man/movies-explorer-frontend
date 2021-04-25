import React from 'react';
import {Link,Route,useHistory} from 'react-router-dom';
import logoPath  from "../image/header_logo.svg";

function Header(props) {
	const history = useHistory(); 
	function signOut(){
	  props.handleLogin();
	  localStorage.removeItem('token');
	  history.push('/sign-in');
	}
	return (		
		<header className="header">
			<img src={logoPath}  alt="Место" className="header__logo"/>
			<Route path="/sign-up">
				<Link to="sign-in" className="header__link">Войти</Link>
			</Route>
			<Route path="/sign-in">
				<Link to="sign-up" className="header__link">Регистрация</Link>
			</Route>
			<Route path="/main">
				<div className="header__menu">
				<h3 className="header__email">{props.email}</h3>
				<button to="sign-in" className="header__button" onClick={signOut}>Выйти</button>
				</div>
			</Route>
	   </header>
		
	)
} 
export default Header;