import success  from "../image/union-v.png";
import failing  from "../image/union-x.png";
function infoTooltip(props) {	
	return(
		<>		
		<section className={`popup popup_type_info ${props.isOpen?'popup__is-opened':''}`}>
			<input className="popup__overlay popup__overlay_active" onClick={props.onClose} />
			<div className="popup__container" >
				<button type="button" className="popup__close-image" onClick={props.onClose}> </button>
				{props.result?<>
				<img className="popup__image-result" src={success} alt="success"/>
				<h3 className="popup__txt">Вы успешно зарегистрировались!</h3>
				</>:
				<>
				<img className="popup__image-result" src={failing} alt="fail"/>
				<h3 className="popup__txt">Что-то пошло не так! Попробуйте еще раз.</h3>
				</>}	
			</div>
		</section>
		</>
	)
	
}

export default infoTooltip	