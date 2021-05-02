class MainApi {
	constructor({baseUrl}) {
	this.baseUrl = baseUrl;
	}

	registrationUsers(data){
		return fetch(`${this.baseUrl}signup`,{
			method: 'POST',
			headers:{ "Content-Type": "application/json" },
				body:JSON.stringify({
				email: data.email,
				password: data.password,
				name: data.name
			})		
		})
		.then((response) => {
			if (response.ok){	
			return response.json();
			}else
			{
				throw new Error("Ошибка!");
			}
		})
		.then((data) => {
			console.log(data.token);
			if (data.token){
				localStorage.setItem('token', data.token);			
				return data;
			}
		})
	}

	loginUsers(data){
		return fetch(`${this.baseUrl}signin`,{
			method: 'POST',	
			headers:{
				"Content-Type": "application/json" }, 		
			body:JSON.stringify({
				email: data.email,
				password: data.password
			})		
		})
		.then(response =>response.json())
		.then((data) => {	
			if (data.token){
				localStorage.setItem('token', data.token);			
				return data;
			}
		})
		.catch()
	}

	getUserInfo(){
		return fetch(`${this.baseUrl}users/me`,{
			method: 'GET',		
			headers:{
				"Authorization" : `Bearer ${localStorage.getItem('token')}`,
				"Content-Type": "application/json"}
		}).then(res => { return res.json()})
		.then(data => data)
		.catch(err => {})
	}

	sendUserInfo(data){
		return fetch(`${this.baseUrl}users/me`,{
			method: 'PATCH',		
			headers:{
				"Authorization" : `Bearer ${localStorage.getItem('token')}`,
				"Content-Type": "application/json"},
			body:JSON.stringify({
				name: data.name,
				email: data.email
			})
			}).then(res => {
				if (res.ok) {
					return res.json();
				}
		
				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
		})
	}

	getMovie(){
		return fetch(`${this.baseUrl}movies`,{
			method: 'GET',		
			headers:{
				"Authorization" : `Bearer ${localStorage.getItem('token')}`,
				"Content-Type": "application/json"}
		}).then(res =>{
			if (res.ok) {        
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		});
}

	sendMovie(data){
		return fetch(`${this.baseUrl}movies`,{
			method: 'POST',		
			headers:{
				"Authorization" : `Bearer ${localStorage.getItem('token')}`,
				"Content-Type": "application/json"},
			body:JSON.stringify({
				country: data.country,
				director: data.director,
				duration: data.duration,
				year: data.year,
				description: data.description,
				image:  `https://api.nomoreparties.co${data.image.url}`,
				trailer: data.trailerLink,
				nameRU: data.nameRU,
				nameEN: data.nameEN,
				thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`, 
				movieId: data.id
			})
		}).then(res => {
			if (res.ok) {
				return res.json();
			}
			 // если ошибка, отклоняем промис
			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}

	deleteMovie(id){
		return fetch(`${this.baseUrl}movies/${id}`,{
			method: 'DELETE',		
			headers:{
				"Authorization" : `Bearer ${localStorage.getItem('token')}`,
				"Content-Type": "application/json"},
		}).then(res => {
			if (res.ok) {
				return res.json();
			}
		
			// если ошибка, отклоняем промис
			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
}

export default MainApi = new MainApi({
	baseUrl:  `http://diplommovie-api.nomoredomains.club/api/`
});
