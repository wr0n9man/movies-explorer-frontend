import './Navigation.css'
import {Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';


export default function Navigation(){
   const history = useHistory();
   const [pathname, setPathname] = useState(history.location.pathname);

   useEffect(()=>{
      setPathname(history.location.pathname);
   })

   return(
      <div className="nav">
            <Link to="/" className={pathname==='/'?"nav__main nav__active":"nav__main"}>Главная</Link>
				<Link to="movies" className={pathname==='/movies'?"nav__film nav__active":"nav__film"}>Фильмы</Link>        
				<Link to="saved-movies" className={pathname==='/saved-movies'?"nav__saved nav__active":"nav__saved"}>Сохраненные фильмы</Link>
      </div>
   )
}