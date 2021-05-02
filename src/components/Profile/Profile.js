import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import { useContext, useState } from 'react';
import './Profile.css';
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";



export default function Profile(props){
   const history = useHistory();
   const currentUser = useContext(CurrentUserContext);
   const [isValid, setIsValid]= useState(true);
   const [errors, setErrors] = useState({});
   const [form, setForm]= useState({
      name: currentUser.name,
      email: currentUser.email
   })

   useEffect(()=>{
      setForm({
         name: currentUser.name,
         email: currentUser.email
      });
   },[currentUser])

   function update(e){
      setForm({
            ...form,
            [e.target.name]: e.target.value
         });
         setErrors({...errors, [e.target.name]: e.target.validationMessage });
         setIsValid(e.target.closest("form").checkValidity());
   }

   function handleLogOut(){
      localStorage.removeItem('token');
      props.handleLoggedIn()
      history.push('/')
   }

   function handleSubmitForm(e){
      e.preventDefault()
      if(isValid){
         props.handleRedactProfile(form);
      }
   }

   return(
      <div className="profile">
         <h2 className="profile__header">Привет, {currentUser.name}</h2>
         <form className="profile__form" onSubmit={handleSubmitForm}>
            <div className="profile__name">
               <span className="profile__span">Имя</span>
               <input className="profile__input" name="name" value={form.name} onChange={update} pattern="^([А-Я]{0,1}[а-яё]{1,23}[\s-]{0,1}([А-Я]{0,1}[а-яё]{1,23})*|[A-Z]{0,1}[a-z]{1,23}[\s-]{0,1}([A-Z]{0,1}[a-z]{1,23})*)$"></input>
               
            </div>
            <span className="profile__error">{errors.name}</span>
            <div className="profile__email">
               <span className="profile__span">E-mail</span>
               <input className="profile__input" name="email" value={form.email} onChange={update} type="email"></input>               
            </div>
            <span className="profile__error">{errors.email}</span>
            <button className={isValid?"profile__redact profile__redact_active":"profile__redact"}>Редактировать</button>
         </form>
         <button className="profile__logout" onClick={handleLogOut}>Выйти из аккаунта</button>
      </div>
   )
}