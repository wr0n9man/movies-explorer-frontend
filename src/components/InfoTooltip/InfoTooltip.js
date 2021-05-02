import './InfoTooltip.css'


function InfoTooltip(props) {	


	return(
		<>		
		<section className={`infoTooltip  ${props.isOpened?'infoTooltip__is-opened':''}`}>
			<div className={props.result?"infoTooltip__container infoTooltip__container_true":"infoTooltip__container"} >
				<button type="button" className="infoTooltip__close-image" onClick={props.handleCloseInfoTooltip}></button>
				{props.result?<>			
				<h3 className="infoTooltip__txt">Запрос прошел успешно</h3>
				</>:
				<>
				<h3 className="infoTooltip__txt">Что-то пошло не так! Попробуйте еще раз.</h3>
				</>}	
			</div>
		</section>
		</>
	)
	
}

export default InfoTooltip	