class ApiAuth {
	constructor({baseUrl}) {
	this.baseUrl = baseUrl;
	}

	registrationUsers(data){
		return fetch(`${this.baseUrl}/signup`,{
			method: 'POST',
			headers:{ "Content-Type": "application/json" },
				body:JSON.stringify({
				email: data.email,
				password: data.password
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
		.then(res => {					
				return res;			
		})
	}

loginUsers(data){
	return fetch(`${this.baseUrl}/signin`,{
		method: 'POST',	
		headers:{ "Content-Type": "application/json" }, 		
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

getUser(token){
	return fetch(`${this.baseUrl}/users/me`,{
		method: 'GET',		
		headers:{ "Content-Type": "application/json",
			"Authorization" : `Bearer ${token}`
		},
	}).then(res => { return res.json()})
	.then(data => data)
	.catch(err => {})
}
}

export default ApiAuth = new ApiAuth({
	baseUrl:  `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`
});
