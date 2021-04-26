import './NavTab.css'

export default function NavTab(){
	function handleScroll(){
		
		window.scrollTo({top: 850,  behavior: 'smooth'});
	}
	return(
		<button className="navTab__button" onClick={handleScroll}>Узнать больше</button>
	)
}