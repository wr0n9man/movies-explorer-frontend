import "./AboutProject.css"

export default function AboutProject(){
	return(
		<div className="aboutProject">
			<h2 className="aboutProject__header">О проекте</h2>
			<div className="aboutProject__info">
				<div className="aboutProject__stage">
					<h3 className="aboutProject__infoHead">Дипломный проект включал 5 этапов</h3>
					<p className="aboutProject__infoText">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
				</div>
				<div className="aboutProject__time">
					<h3 className="aboutProject__infoHead">На выполнение диплома ушло 5 недель</h3>
					<p className="aboutProject__infoText">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
				</div>
			</div>
			<div className="aboutProject__progressBar">
				<div className="aboutProject__back">
					<p className="aboutProject__oneWeak">1 неделя</p>
					<p className="aboutProject__span">Back-end</p>
				</div>
				<div className="aboutProject__front">
					<p className="aboutProject__fourWeak">4 недели</p>
					<p className="aboutProject__span">Front-end</p>
				</div>
			</div>
		</div>
	)
}