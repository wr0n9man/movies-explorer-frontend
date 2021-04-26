import './Footer.css'

export default function Footer(){
   return(
      <div className="footer">
         <h2 className="footer__head">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
         <div className="footer__info">
            <p className="footer__copyright">&copy;2020</p>
            <ul className="footer__links">
               <li><a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
               <li><a className="footer__link" href="https://github.com/wr0n9man">Github</a></li>
               <li><a className="footer__link" href="https://vk.com/wr0n9man">ВКонтакте</a></li>
            </ul>
         </div> 
      </div>
   )
}