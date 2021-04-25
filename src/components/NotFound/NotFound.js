import './NotFound.css'

export default function NotFound(){
	return(
		<div className="notFound">
			<div/>
			<div className="notFound__info">
				<h2 className="notFound__header">404</h2>
				<span className="notFound__span">Страница не найдена</span>
			</div>
			<button className="notFound__button">Назада</button>
		</div>
	)
}