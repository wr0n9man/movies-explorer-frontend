import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(e){
		e.preventDefault();
		if (!this.state.email || !this.state.password){
			return;
		}
		this.props.handleSubmitLogin(this.state)
	}

	render(){
		return(
			<div className="login">
				<h2 className="login__head">Вход</h2>
				<form className="login__form" onSubmit={this.handleSubmit}>
					<input type="email" className="login__input login__input_email" placeholder="Email" value={this.state.email}  name="email" onChange={this.handleChange}/>
					<input type="password" className="login__input login__input_password" placeholder="Пароль" value={this.state.password} name="password"  onChange={this.handleChange}/>
					<button type="submit" className="login__button">Войти</button>
				</form>

			</div>
		)
	}
}

export default withRouter(Login)
