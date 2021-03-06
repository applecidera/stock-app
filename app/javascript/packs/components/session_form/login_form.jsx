import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(type) {
		return (e) => {
			this.setState({
				[type]: e.target.value
			});
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const errors=()=>(this.setState({
			errors: "Invalid email or password."
		}))
		console.log(this.props);
		this.props
			.createSession(this.state);
	}

	componentDidMount(){
		this.props.clearSessionErrors();
	}

	render() {
		let errors = null;
		if (this.props.errors.length > 0) {
			errors = (
				<ul className="session-errors">
					{this.props.errors.map((error, i) => (
						<li key={`error-${i}`}>{error}</li>
					))}
				</ul>
			);
		}

		return (
			<div className="session-form-container">
        {errors}
				<form className="session-input-form">
          <h3>Login</h3>
					<input
						type="text"
						id="email"
						value={this.state.email}
						onChange={this.handleInput('email')}
						placeholder="Email"
					/>
					<input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleInput('password')}
						placeholder="Password"
					/>
					<button className="signup" onClick={this.handleSubmit}>Login</button>
          <span className='session-back-button' onClick={()=>this.props.goBack()}>Go Back</span>
				</form>
			</div>
		);
	}
}

export default LoginForm;
