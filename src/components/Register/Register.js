import './Register.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"

export default function Register(){
   return(
      <div className="register">
      <Link to="/" >
         <img className="register__logo" src={logo} alt="логотип"/>
      </Link>
      <h2 className="register__header">Добро пожаловать!</h2>
      <form className="register__form">
         <span className="register__span">Имя</span>
         <input className="register__input"/>
         <span className="register__error"/>
         <span className="register__span">E-mail</span>
         <input className="register__input"/>
         <span className="register__error"/>
         <span className="register__span">Пароль</span>
         <input className="register__input"/>
         <span className="register__error"/>
         <button className="register__button">Зарегистрироваться</button>
      </form>
      <div className="register__dop">
         <p className="register__text">Уже зарегистрированы?</p>
         <Link to="signin" className="register__link">Войти</Link>
      </div>
   </div>
   )
}