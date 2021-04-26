import './Login.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"

export default function Login(){
   return(
      <div className="login">
         <Link to="/" >
            <img className="login__logo" src={logo} alt="логотип"/>
         </Link>
         <h2 className="login__header">Рады видеть!</h2>
         <form className="login__form">
            <span className="login__span">E-mail</span>
            <input className="login__input"/>
            <span className="login__error"/>
            <span className="login__span">Пароль</span>
            <input className="login__input"/>
            <span className="login__error"/>
            <button className="login__button">Войти</button>
         </form>
         <div className="login__dop">
            <p className="login__text">Ещё не зарегистрированы?</p>
            <Link to="signup" className="login__link">Регистрация</Link>
         </div>
      </div>
   )
}