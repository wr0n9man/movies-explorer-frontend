import './Main.css'
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProjec';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';



export default function Main(props){
	return(
		<>
		
			
				<Promo width={props.width}/>
				<AboutProject/>
				<Techs/>
				<AboutMe/>
				<Portfolio/>
	
		
		</>
	)

}