import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault();

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="SignUpContainer">
					<div className="SignupForm">
						<h4>Sign up</h4>
						<form>
							<div className="form-group">
								<label className="form-label" htmlFor="username"></label>
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-group">
								<label className="form-label" htmlFor="password"> </label>
								<input className="form-input"
									placeholder="Password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-group ">
								<button
									className="btn btn-primary col-mr-auto"
									onClick={this.handleSubmit}
									type="submit"
								>Submit</button>
							</div>
						</form>
					</div>
				</div>

			)
		}
	}
}

export default Signup



// import React, { Component } from 'react'
// import axios from 'axios'
// import { Redirect } from 'react-router-dom'

// class SignupForm extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			firstName: '',
// 			lastName: '',
// 			email: '',
// 			photos: '',
// 			username: '',
// 			password: '',
// 			confirmPassword: '',
// 			redirectTo: null
// 		}
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 		this.handleChange = this.handleChange.bind(this)
// 	}
// 	handleChange(event) {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		})
// 	}
// 	handleSubmit(event) {
// 		event.preventDefault()
// 		// TODO - validate!
// 		axios
// 			.post('', {
// 				username: this.state.username,
// 				password: this.state.password,
// 				firstName: this.state.firstName,
// 				lastName: this.state.lastName,
// 				email: this.state.email,
// 				photos: this.state.photos
// 			})
// 			.then(response => {
// 				console.log(response)
// 				if (!response.data.errmsg) {
// 					console.log('youre good')
// 					this.setState({
// 						redirectTo: '/login'
// 					})
// 				} else {
// 					console.log('duplicate')
// 				}
// 			})
// 	}
// 	render() {
// 		if (this.state.redirectTo) {
// 			return <Redirect to={{ pathname: this.state.redirectTo }} />
// 		}
// 		return (
// 			<div>

// 				<div className="Home">
// 					<h1>Fashion House </h1>
// 				</div>
// 				<div className="SignupForm">
// 					<h1>Signup form</h1>
// 					<form>
// 						<div className="form-row">
// 							<div className="form-group col-md-3">
// 								<label htmlFor="firstName">First Name: </label>
// 								<input
// 									type="text"
// 									className="form-control"
// 									id="inputFirstName"
// 									placeholder="First Name"
// 									name="firstName"
// 									value={this.state.firstName}
// 									onChange={this.handleChange}
// 								/>
// 							</div>
// 							<div className="form-group col-md-3">
// 								<label htmlFor="lastName">Last Name: </label>
// 								<input
// 									type="text"
// 									className="form-control"
// 									id="inputLastName"
// 									placeholder="Last Name"
// 									name="lastName"
// 									value={this.state.lastName}
// 									onChange={this.handleChange}
// 								/>
// 							</div>
// 							<div className="form-group col-md-3">
// 								<label htmlFor="email">Email: </label>
// 								<input
// 									type="email"
// 									className="form-control"
// 									id="inputEmail"
// 									placeholder="Email"
// 									name="email"
// 									value={this.state.email}
// 									onChange={this.handleChange}
// 								/>
// 							</div>
// 						</div>
// 						<div className="form-rom">
// 							<div className="form-group col-md-2">
// 								<label className="custom-file-label" htmlFor="photos">Add Photo for Profile Picture: </label>
// 								<input
// 									type="file"
// 									className="custom-file-input"
// 									id="customFile"
// 									name="photos"
// 									value={this.state.photos}
// 									onChange={this.handleChange}
// 								/>
// 							</div>
// 							<div className="form-group col-md-2">
// 								<label htmlFor="username">Username: </label>
// 								<input
// 									type="text"
// 									className="form-control"
// 									id="inputUsername"
// 									placeholder="Username"
// 									name="username"
// 									value={this.state.username}
// 									onChange={this.handleChange}
// 								/>
// 							</div>
// 							<div className="form-group col-md-2">
// 								<label htmlFor="password">Password: </label>
// 								<input
// 									type="password"
// 									className="form-control"
// 									id="inputPassword"
// 									placeholder="Password"
// 									name="password"
// 									value={this.state.password}
// 									onChange={this.handleChange}
// 								/>
// 							</div>
// 							<div className="form-group col-md-2">
// 								<label htmlFor="password">Confirm Password: </label>
// 								<input
// 									type="password"
// 									className="form-control"
// 									id="inputPasswordConfirm"
// 									placeholder="Password"
// 									name="password"
// 									value={this.state.password}
// 									onChange={this.handleChange}
// 								/>
// 							</div>
// 						</div>
// 						<button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Sign up</button>
// 					</form>
// 				</div>
				
// 			</div>
// 		)
// 	}
// }

// export default SignupForm