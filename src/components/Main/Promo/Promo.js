import logo from '../../../images/promoLogo.svg'
import './Promo.css';
import NavTab from '../NavTab/NavTab'

export default function Promo(props){
	return(
		<div className="promo">
			<div>
			<h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
			<p className="promo__span">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
			<NavTab/>
			</div>
			<img className="promo__img" src={logo} alt="Лого"/>

		</div>
	)
}