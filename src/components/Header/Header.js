import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import close from "../../images/Close.svg"
import Navigation from "../Navigation/Navigation";

import { useState } from "react";



export default function Header(props){

   const [burger , setBurger] = useState(false);

   function handleBurger(){
      setBurger(!burger)
   }
   

	return(
		<div className="header">
      
         <div className="header__burger" onClick={handleBurger}>
            <span/>
         </div>
         <div className={burger?"header__overlay header__overlay_active":"header__overlay"} onClick={handleBurger}/>
         <Link to="/" >
               <img className="header__logo" src={logo} alt="логотип"/>
         </Link>
         {props.loggedIn ?
         
         <div className={burger?"header__menu header__menu_active":"header__menu"}>            
            <img className="header__close" src={close} alt="Закрыть" onClick={handleBurger}/>                 
            <Navigation/> 
            <Link to="profile" className="header__accaunt">Аккаунт</Link>   
         </div>:
         <>      
         <div>    
				<Link to="signup" className="header__reg">Регистрация</Link>
				<Link to="signin" className="header__auth">Войти</Link>            
         </div>
         </>
         }
		</div>
	)
}