import './Login.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import { useState } from 'react/cjs/react.development';

export default function Login(props){

   const [isValid, setIsValid]= useState(false);
   const [errors, setErrors] = useState({});
   const [form, setForm]= useState({
      email: '',
      password:''
   })

   function update(e){
      setForm({
            ...form,
            [e.target.name]: e.target.value
         });
         setErrors({...errors, [e.target.name]: e.target.validationMessage });
         setIsValid(e.target.closest("form").checkValidity());
   }

   function handleSubmitForm(e){
      if(isValid){
      e.preventDefault();
      props.handleSubmitLogin(form)
      }
   }

   return(
      <div className="login">
         <Link to="/" >
            <img className="login__logo" src={logo} alt="логотип"/>
         </Link>
         <h2 className="login__header">Рады видеть!</h2>
         <form className="login__form" onSubmit={handleSubmitForm}>
            <span className="login__span">E-mail</span>
            <input type="email"name="email" value={form.email} onChange={update} className="login__input" required/>
            <span className="login__error">{errors.email}</span>
            <span className="login__span">Пароль</span>
            <input type="password" name="password" value={form.password} onChange={update} className="login__input" required/>
            <span className="login__error"></span>
            <button className={isValid?"login__button login__button_active":"login__button"}>Войти</button>
         </form>
         <div className="login__dop">
            <p className="login__text">Ещё не зарегистрированы?</p>
            <Link to="signup" className="login__link">Регистрация</Link>
         </div>
      </div>
   )
}