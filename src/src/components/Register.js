import React from 'react';
import { Link, withRouter  } from 'react-router-dom';

class Register extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		email: '',
		password: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmitRegister(this.state)
	}


	render(){
		return(
			<div className="register">
				<h2 className="register__head">Регистрация</h2>
				<form className="register__form" onSubmit={this.handleSubmit}>
					<input name="email" type="email" className="register__input register__input_email" placeholder="Email" value={this.state.email}  onChange={this.handleChange}/>
					<input name="password" type="password" className="register__input register__input_password" placeholder="Пароль" value={this.state.password}  onChange={this.handleChange}/>
					<button type="submit" className="register__button">Зарегистрироваться</button>
				</form>
				<div className="register__signin">
					<p>Уже зарегистрированы?</p>
					<Link to="sign-in" className="register__login-link">Войти</Link>
				</div>
			</div>
		)
		}
}

export default withRouter(Register)
