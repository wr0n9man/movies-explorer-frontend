import Main from "../Main/Main";
import { Switch, Route, withRouter, useHistory, Redirect } from "react-router-dom";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {CurrentUserContext} from "../../context/CurrentUserContext"
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi"

import { useEffect,useState } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";



function App() {
  const [loggedIn , setLoggedIn]= useState(false);
  const [currentUser, setCurrentUser ]= useState({});
  const [infoSearch,setInfoSearch]= useState("");
  const [infoMySearch,setMyInfoSearch]= useState("");
  const [movie,setMovie]= useState([]);
  const [myMovie,setMyMovie]= useState([]);  
  const [width,setWidth]= useState(window.innerWidth);
  const [addMovie,setAddMovie] = useState(0);
  const [render,setRender]= useState(false);
  const [movieCount,setMovieCount]=useState(0);
  const [more,setMore]=useState(false);
  const [isInfoTooltip, setIsInfoTooltip]= useState(false);
  const [result, setResult] = useState(false)
  const history = useHistory();
  const ShortFilmTime=40;
  const MonitorWidth={
    fullHd:1281,
    hd:1025,
    small:550
  }

  useEffect(()=>{
    if(width > MonitorWidth.fullHd){
      setMovieCount(16);
    } else if(width > MonitorWidth.hd){
      setMovieCount(12);
    } else  if(width > MonitorWidth.small){   
      setMovieCount(8);
    } else {
      setMovieCount(5);
    }
    if(localStorage.getItem("movie")){
      setMovie(JSON.parse(localStorage.getItem("movie")));
      }
    handlerTokenCheck()
  },[])

  useEffect(()=>{
    if(width > 1281){
      setAddMovie(4);
    } else if(width > 1025){
      setAddMovie(3);
    } else  if(width > 550){   
      setAddMovie(2);
    } else {
      setAddMovie(2);
    }  
  },[width])


  useEffect(()=>{
    handleSetMore();
  },[movieCount])

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);

  useEffect(()=>{
    handleSetMore();
  },[movie])

  useEffect(()=>{
    handleCheckSaveMovie();
  },[myMovie])
  
  useEffect(()=>{
    if(history.location.pathname!=="/profile"){
    localStorage.setItem("route",history.location.pathname)
    }
  })

  function handleSetMore(){
    if (movie.length <= movieCount){
      setMore(false)
    } else{
      setMore(true)
    }
  }

  function handleLoggedIn(){ 
    setLoggedIn(!loggedIn)
  }

  
  function handleLogOut(){
    localStorage.removeItem('token');
    setLoggedIn(!loggedIn)
    history.push('/')
 }

  function handleInfoTooltip(){
    setIsInfoTooltip(true);
    setTimeout(function() {
      setIsInfoTooltip(false)
  },5000)
  }

  function handleCloseInfoTooltip(){
    setIsInfoTooltip(false)
  }

  function handleSetResultTrue(){
    setResult(true)
  }

  function handleSetResultFalse(){
    setResult(false)
  }


  function handleSearc(values,atribut,setter,setterInfo){
    let lang=(/[а-яё]/i).test(atribut.toLowerCase)
    let newMovie= values.filter(movie=> (lang?movie.nameEN:movie.nameRU).toLowerCase().match(new RegExp(atribut.toLowerCase())))
    
    setter(newMovie);  
    if (newMovie.length===0){
      setterInfo('Ничего не найдено')
    }else{
      setterInfo('')
    }
  }


  function handlerShortFilm(dop,setter,setterInfo, setMovie, key){
    if(dop){
      let newMovie=setMovie.filter(item => item.duration < ShortFilmTime);
      setter(newMovie); 
      if (newMovie.length===0){
        setterInfo('Ничего не найдено')
      }else{
        setterInfo('')
      }
    }else{ 
      setter(JSON.parse(localStorage.getItem(key)));
      if ((JSON.parse(localStorage.getItem(key))).length===0){
        setterInfo('Ничего не найдено')
      }else{
        setterInfo('')
      } 
    }
  }

  

  function searchMovie(atribut,dop){
    setRender(true)   
    MoviesApi.getMovies()
    .then((values)=>{ 
      localStorage.setItem('movie',JSON.stringify(values));
      handleSearc(values,atribut, setMovie,setInfoSearch);
      handlerShortFilm(dop,setMovie,setInfoSearch,movie,'movie') 
      setRender(false);
    
    }).catch(setInfoSearch("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"))
}

function searchShortMovie(atribut){
  setRender(true);
  handlerShortFilm(atribut,setMovie,setInfoSearch,movie,'movie')
  setRender(false);  
}

function searchMyShortMovie(atribut){
  setRender(true);
  handlerShortFilm(atribut,setMyMovie,setMyInfoSearch,myMovie,'myMovie')
  setRender(false);  
}

function searchMyMovie(atribut,dop){
  setRender(true)
  MainApi.getMovie()
  .then((values)=>{ 
    handleSearc(values,atribut, setMyMovie,setMyInfoSearch) 
    handlerShortFilm(dop,setMyMovie,setMyInfoSearch,myMovie,'myMovie')
    setRender(false);
  }).catch( setMyInfoSearch("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"))
}


  function handleSubmitRegister(state){
    MainApi.registrationUsers(state)	
    .then((res) => {
      if (res.token){
        handleLoggedIn()
        handlerTokenCheck()
        history.push('/movies')
        }
    })
    .catch((err)=>{
      handleSetResultFalse();
      handleInfoTooltip();		
    })
  }

  function handleSubmitLogin(state){
    MainApi.loginUsers(state)	
    .then((res) => {
      if (res.token){
      handleLoggedIn()
      handlerTokenCheck()
      history.push('/movies')
      }
    })
    .catch((err)=>{		
      handleSetResultFalse();
      handleInfoTooltip();		
    })
  }

  function handleRedactProfile(state){
    MainApi.sendUserInfo(state).then((res)=>{
      handleSetResultTrue();
      handleInfoTooltip();
      setCurrentUser({
        name: res.name,
        email: res.email
      });
    })
    .catch(()=>{
      handleSetResultFalse();
      handleInfoTooltip();
    })
  }

  function handleSaveMovie(state, setter){

    MainApi.sendMovie(state).then(()=>{
      setter(true);
      state.saved=true;
      handleGetMyMovie(setMyMovie)     
      
    }).catch(()=>{
      setter(false);
      state.saved=false;
      handleSetResultFalse();
      handleInfoTooltip();
    })
  }

  function handleDeleteMovie(movie,setter){ 
    MainApi.deleteMovie(myMovie.find(myMovie =>myMovie.movieId===movie.id)._id).then(()=>{
      movie.saved=false;
      setter=(false);
      handleGetMyMovie(setMyMovie)
    }).catch(()=>{
      movie.saved=true;
      setter (true);
      handleSetResultFalse();
      handleInfoTooltip();
    })
   
  }

  function handleDeleteMyMovie(movie){   
    MainApi.deleteMovie(movie._id).then(()=>{
      const newMyMovie = myMovie.filter((c) => c._id !== movie._id);
      setMyMovie(newMyMovie);
    }).catch(()=>{
      handleSetResultFalse();
      handleInfoTooltip();
    })
  }

  function handleGetMyMovie(setter){
    MainApi.getMovie().then((res)=>{setter(res);localStorage.setItem('myMovie',JSON.stringify(res))}).catch((err) =>{setter([])})
  }

  function handleGoBack(){
    history.goBack()
  }

  function handlerTokenCheck(){ 
    if (localStorage.getItem('token')){
      handleLoggedIn()
      if(performance.navigation.type===1){
        if (localStorage.getItem('route')){
          history.push(localStorage.getItem('route'))
        }
      }else{       
        if(history.location.pathname==="/"){
          history.push("/movies")
        }}
      MainApi.getUserInfo().then((res)=>{        
      if(res){   		
          setCurrentUser(res);
          handleGetMyMovie(setMyMovie)          
        }
        })
      .catch(()=>{
        handleSetResultFalse();
        handleInfoTooltip();
      })
      }
  }


  function handleCheckSaveMovie(){    
    movie.map((movie)=>{     
      if( myMovie.find(myMovie =>myMovie.movieId===movie.id)){        
        movie.saved=true;
      }else{
        movie.saved=false;
      }
    }) 
  }

  
  handleCheckSaveMovie()

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <InfoTooltip isOpened={isInfoTooltip} result={result} handleCloseInfoTooltip={handleCloseInfoTooltip}/>
      <Switch>         
        <Route path="/movies">
        {localStorage.getItem('token') ? <Redirect to="/movies" /> : <Redirect to="/" />}
          <Header loggedIn={loggedIn} />
          <Movies   movie={movie} myMovie={myMovie} handlerShortFilm={searchShortMovie} handleDeleteMovie={handleDeleteMovie} handleSaveMovie={handleSaveMovie} info={infoSearch} addMovie={addMovie} more={more} handleSetMore={handleSetMore} handlerSubmit={searchMovie} movieCount={movieCount} setMovieCount={setMovieCount} render={render}/>
          <Footer />
        </Route>
        <Route path="/profile">
        {localStorage.getItem('token') ? <Redirect to="/profile" /> : <Redirect to="/" />}
          <Header loggedIn={loggedIn} />
          <Profile handleLogOut={handleLogOut} handleLoggedIn={handleLoggedIn} handleRedactProfile={handleRedactProfile}/>
        </Route>
        <Route path="/saved-movies">  
        {localStorage.getItem('token') ? <Redirect to="/saved-movies" /> : <Redirect to="/" />}     
          <Header loggedIn={loggedIn} />
          <SavedMovies info={infoMySearch} searchMyShortMovie={searchMyShortMovie} handlerSubmit={searchMyMovie} handleGetMyMovie={handleGetMyMovie} handleDeleteMovie={handleDeleteMyMovie} myMovie={myMovie} movieCount={movieCount}  render={render}/>
          <Footer />
        </Route>
        <Route exact path="/">
          <Header loggedIn={loggedIn} />
          <Main width={width}/>
          <Footer />
        </Route>
       
        <Route path="/signin">
          {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}   
          <Login handleSubmitLogin={handleSubmitLogin}/>
        </Route>
        <Route path="/signup">
        {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signup" />}   
          <Register handleSubmitRegister={handleSubmitRegister} />
        </Route>
        <Route>
          <NotFound handleGoBack={handleGoBack}/>
        </Route>
  
      </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
