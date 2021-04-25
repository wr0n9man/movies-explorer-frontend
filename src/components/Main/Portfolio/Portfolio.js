import './Portfolio.css';

export default function Portfolio(){
	return(
		<div className="portfolio">
			<h2 className="portfolio__header">Портфолио</h2>
			<div className="portfolio__links">
				<a className="portfolio__link" href="https://github.com/wr0n9man/how-to-learn"><p className="portfolio__linkName">Статичный сайт</p><span className="portfolio__span">↗</span></a>
				<a className="portfolio__link" href="https://github.com/wr0n9man/russian-travel"><p className="portfolio__linkName">Адаптивный сайт</p><span className="portfolio__span">↗</span></a>
				<a className="portfolio__link" href="https://github.com/wr0n9man/react-mesto-api-full"><p className="portfolio__linkName">Одностраничное приложение</p><span className="portfolio__span">↗</span></a>
			</div>
			

		</div>
	)
}