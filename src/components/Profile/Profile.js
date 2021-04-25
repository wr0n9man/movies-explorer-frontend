import './Profile.css';


export default function Profile(props){
   return(
      <div className="profile">
         <h2 className="profile__header">Привет, {props.name}</h2>
         <form className="profile__form">
            <div className="profile__name">
               <span className="profile__span">Имя</span>
               <input className="profile__input" defaultValue={props.name}></input>
            </div>
            <div className="profile__email">
               <span className="profile__span">E-mail</span>
               <input className="profile__input" defaultValue={props.email}></input>
            </div>
            <button className="profile__redact">Редактировать</button>
         </form>
         <button className="profile__logout">Выйти из аккаунта</button>
      </div>
   )
}