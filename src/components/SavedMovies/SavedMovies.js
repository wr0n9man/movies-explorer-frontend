import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import '../Movies/Movies.css'
import SearchForm from '../Movies/SearchForm/SearchForm.js'
import Preloader from '../Movies/Preloader/Preloader.js'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'


export default function SavedMovies(props){
   const [myMovie,setMyMovie]= useState([]);

   useEffect(()=>{
      props.handleGetMyMovie(setMyMovie)
   },[])

   return(
      <div className="movie">
         <SearchForm/>
         <Preloader render={props.render}/> 
         <MoviesCardList handleDeleteMovie={props.handleDeleteMovie} myMovies={myMovie}/>
      
      </div>
   )
}