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

function App() {
  return (
    <div className="App">
      
      <Switch>        
        <Route path="/movies">
          <Header loggedIn={true} />
          <Movies />
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
  
    </div>
  );
}

export default withRouter(App);
