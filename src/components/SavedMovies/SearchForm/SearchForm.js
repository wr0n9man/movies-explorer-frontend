import '../../Movies/SearchForm/SearchForm.css'
import searchIcon from '../../../images/searc1.svg'
import { useState } from 'react'

export default function SearchForm(props){
   const [dop,setDop] = useState(false);
   const [valid,setValid]=useState(true)
   const [film,setFilm] = useState("");

   function handleInputOnChange(e){
      setFilm(e.target.value)
   }

   function handleDopButton(e){
      e.preventDefault();
      setDop(!dop);
   }

   function handleSubmitForm(e){
      e.preventDefault();
      if (film){
         setValid(true)
         props.handlerSubmit(film,dop)
      }else{
         setValid(false)
      }
      
      
   }

   return(
      <div className="searchForm">
         <form className={valid?"searchForm__form":"searchForm__form searchForm__form_err"} onSubmit={handleSubmitForm} >
            <div className={valid?"searchForm__textarea":"searchForm__textarea searchForm__textarea_err"}>
               <img className="searchForm__img" src={searchIcon} alt="поиск"/>
               <input className="searchForm__input" placeholder ="Фильм" value={film} onChange={handleInputOnChange}/>
               <button className="searchForm__searchButton"/>
            </div>
            <span className={valid?"searchForm__error":"searchForm__error searchForm__error_active"}>Нужно ввести ключевое слово</span>
            <div className="searchForm__line">
               <button className={dop?"searchForm__dopButton searchForm__dopButton_active":"searchForm__dopButton" } onClick={handleDopButton}/>
               <span className="searchForm__span">Короткометражки</span>
            </div>
         </form>
      </div>
   )
}