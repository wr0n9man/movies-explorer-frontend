import './NavTab.css'

export default function NavTab(props){
	function handleScroll(){
		let top;
		if(props.width > 1281){
			top=591;
		 } else if(props.width > 1025){
			top=649;
		 } else  if(props.width > 550){   
			top=1003;
		 } else {
			top=873;
		 }  
		
		window.scrollTo({top: top,  behavior: 'smooth'});
	}
	return(
		<button className="navTab__button" onClick={handleScroll}>Узнать больше</button>
	)
}