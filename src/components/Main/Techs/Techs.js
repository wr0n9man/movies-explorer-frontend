import './Techs.css'

export default function Techs(){
	return(
		<div className="techs">
			<h2 className="techs__header">Технологии</h2>
			<div className="techs__main">
				<p className="techs__mainHead">7 технологий</p>
				<p className="techs__mainInfo">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
				<div className="techs__components">
					<span className="techs__component">HTML</span>
					<span className="techs__component">CSS</span>
					<span className="techs__component">JS</span>
					<span className="techs__component">React</span>
					<span className="techs__component">Git</span>
					<span className="techs__component">Express.js</span>
					<span className="techs__component">mongoDB</span>
				</div>
			</div>
		</div>
	)
}