class MoviesApi {
	constructor({baseUrl}) {
	this.baseUrl = baseUrl;
	}

	getMovies(){
		return fetch(`${this.baseUrl}`,{
			method: 'GET',		
			headers:{ "Content-Type": "application/json",}
		}).then(res => {	
			if (res.ok) {
			return res.json();
		}})
		.then(data => data)
	}


}

export default MoviesApi = new MoviesApi({
	baseUrl:  `https://api.nomoreparties.co/beatfilm-movies`
});
