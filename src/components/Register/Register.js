import './Register.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import { useState } from 'react/cjs/react.development';

export default function Register(props){

   const [isValid, setIsValid]= useState(false);
   const [errors, setErrors] = useState({});
   const [form, setForm]= useState({
      name: '',
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
      props.handleSubmitRegister(form)
      }
   }

   return(
      <div className="register">
      <Link to="/" >
         <img className="register__logo" src={logo} alt="логотип"/>
      </Link>
      <h2 className="register__header">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmitForm}>
         <span className="register__span">Имя</span>
         <input className="register__input" name="name" value={form.name} onChange={update} pattern="^([А-Я]{0,1}[а-яё]{1,23}[\s-]{0,1}([А-Я]{0,1}[а-яё]{1,23})*|[A-Z]{0,1}[a-z]{1,23}[\s-]{0,1}([A-Z]{0,1}[a-z]{1,23})*)$" required/>
         <span className="register__error">{errors.name}</span>
         <span className="register__span">E-mail</span>
         <input className="register__input" name="email" value={form.email} onChange={update} type="email"  required/>
         <span className="register__error">{errors.email}</span>
         <span className="register__span">Пароль</span>
         <input type="password" className="register__input" name="password" value={form.password} onChange={update} required/>
         <span className="register__error">{errors.password}</span>
         <button  className={isValid?"register__button register__button_active":"register__button"}>Зарегистрироваться</button>
      </form>
      <div className="register__dop">
         <p className="register__text">Уже зарегистрированы?</p>
         <Link to="signin" className="register__link">Войти</Link>
      </div>
   </div>
   )
}