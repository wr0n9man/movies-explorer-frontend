function PopupWithForm(props) {
	
	return(
		<>
		
		<section className={`popup popup_type_${props.name} ${props.isOpen?'popup__is-opened':''}`}>
			<input className="popup__overlay popup__overlay_active" onClick={props.onClose} />
			<div className="popup__container" >
				<button type="button" className="popup__close-image" onClick={props.onClose}> </button>				
				<h2 className="popup__head">{props.title}</h2>
				<form name={`popup-${props.name}`} className="popup__content" onSubmit={props.onSubmit} >	
				{props.children}	
				</form>
			</div>
		</section>
		</>
	)
	
}

export default PopupWithForm	