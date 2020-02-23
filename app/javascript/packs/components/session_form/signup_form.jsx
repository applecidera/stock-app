import React from 'react';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			errors: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.clearSessionErrors();
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
		const that=this;

		if (this.state.email === '') {
			this.setState({ errors: 'Please enter an email address!' });
		} else if (this.state.password === '') {
			this.setState({ errors: 'Please enter a password!' });
		} else {
			this.props.createUser(this.state).then(() => this.props.history.push('/portfolio'));
		}
		
	}

	render() {

		let errors = null;
		if (this.props.errors.length > 0) {
			errors = (
				<ul className="session-errors">{this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}</ul>
			);
		}
		if (this.state.errors) {
			errors = <span className="session-errors">{this.state.errors}</span>;
		}
		
		return (
			<div className="session-form-container">
				<form className="session-input-form">
          {errors}
          <h3>Sign Up</h3>
					<input
						type="text"
						id="name"
						value={this.state.name}
						onChange={this.handleInput('name')}
						placeholder="Name"
					/>
					<input
						type="email"
						required
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
					<button className="signup" onClick={this.handleSubmit}>
						Sign Up
					</button>
          <span className='session-back-button' onClick={()=>this.props.goBack()}>Go Back</span>
				</form>
			</div>
		);
	}
}

export default SignupForm;
