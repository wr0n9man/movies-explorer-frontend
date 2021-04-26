import './SearchForm.css'
import searchIcon from '../../../images/searc1.svg'
import { useState } from 'react'

export default function SearchForm(props){
   const [dop,setDop] = useState(false);

   function handleDopButton(e){
      e.preventDefault();
      setDop(!dop);
   }

   return(
      <form className="searchForm">
         <div className="searchForm__textarea">
            <img className="searchForm__img" src={searchIcon} alt="поиск"/>
            <input className="searchForm__input" placeholder ="Фильм" required/>
            <button className="searchForm__searchButton"/>
         </div>

         <div className="searchForm__line">
            <button className={dop?"searchForm__dopButton searchForm__dopButton_active":"searchForm__dopButton" } onClick={handleDopButton}/>
            <span className="searchForm__span">Короткометражки</span>
         </div>
      </form>
   )
}