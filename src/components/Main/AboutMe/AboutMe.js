import './AboutMe.css'
import foto from '../../../images/portfolio.jpg'

export default function AboutMe(){
	return(
		<div className="aboutMe">
			<h2 className="aboutMe__header">Студент</h2>
			<div className="aboutMe__main">
				<div className="aboutMe__info">
               <div>
					<h3 className="aboutMe__name">Дмитрий</h3>
					<span className="aboutMe__span">Фронтенд-разработчик, 20 лет</span>
					<p className="aboutMe__txt">Я родился и живу в Ижевску, учусь на факультете ИВТ ИжГТУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. </p>
					</div>
               <div className="aboutMe__links">
						<a className="aboutMe__link" href="https://vk.com/wr0n9man">ВКонтакте</a>
						<a className="aboutMe__link" href="https://github.com/wr0n9man">Github</a>
					</div>
				</div>
				<img  className="aboutMe__img" src={foto} alt="Я"/>
			</div>
		</div>
	)
}