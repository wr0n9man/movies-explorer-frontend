function  ImagePopup(props) {	

	return(
		
		<>{
		<section className={`popup popup_type_image ${props.isOpen?'popup__is-opened':''}` } id="popup-image" >
			<input className="popup__overlay"/>
			<div className="popup__image" id="Image" >
				<button type="button" className="popup__close-image" onClick={props.onClose}> </button>
				<img src={props.card.link} alt="" className="popup__photo"/>
				<h4 className="popup__name">{props.card.name}</h4>
			</div>
		</section>}
		</>
	)
}


export default ImagePopup