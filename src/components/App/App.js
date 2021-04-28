import Main from "../Main/Main";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {MoviesContext} from "../../context/MoviesContext"
import MoviesApi from "../../utils/MoviesApi";
import { useState } from "react/cjs/react.development";
import { useContext, useEffect } from "react";



function App() {
  const [movie,setMovie]= useState([]);
  const [movieCount,setMovieCount]=useState(0);


  useEffect(()=>{
    if(window.outerWidth > 1281){
      setMovieCount(16)
    } else if(window.outerWidth > 1025){
      setMovieCount(12)
    } else  if(window.outerWidth > 550){
      console.log(1);
      setMovieCount(8)
    } else {
      setMovieCount(5)
    }  
    MoviesApi.getMovies()
    .then((values)=>{
      setMovie(values)
    })
  },[])

function searchMovie(atribut, dop){
  if(dop){
    MoviesApi.getMovies()
    .then((values)=>{
      setMovie(values.filter(item => item.duration < 40).filter(movie=> movie.nameRU.toLowerCase().match(new RegExp(atribut.toLowerCase()))).slice(0,movieCount));
    })   
  }else{
    MoviesApi.getMovies()
    .then((values)=>{
      setMovie(values.filter(movie=> movie.nameRU.toLowerCase().match(new RegExp(atribut.toLowerCase()))).slice(0,movieCount));
    })
  }
}



  return (
    <div className="App">
      <MoviesContext.Provider value={movie}>
      <Switch>        
        <Route path="/movies">
          <Header loggedIn={true} />
          <Movies movie={movie} handlerSubmit={searchMovie}/>
          <Footer />
        </Route>
        <Route path="/profile">
          <Header loggedIn={true} />
          <Profile />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header loggedIn={true} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/">
          <Header loggedIn={true} />
          <Main />
          <Footer />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      </MoviesContext.Provider>
    </div>
  );
}

export default withRouter(App);
