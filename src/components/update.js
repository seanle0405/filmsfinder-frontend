import React, { Component } from 'react'
import Header from './Header.js'

const baseURL = 'http://localhost:3003/'

class Update extends Component {
		state = {
			name : ''
<<<<<<< HEAD

		}
=======
		}

>>>>>>> a3ab7388afd85218c1e758fba65bf9891005be7d
	handleChange = (event) => {
		this.setState({
			[event.target.id] : event.target.value
		},() => {
			console.log(this.state.name)
		})

	}
<<<<<<< HEAD
=======

>>>>>>> a3ab7388afd85218c1e758fba65bf9891005be7d
	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state.name)
		fetch(`${baseURL}movies/123` , {
			method: 'PUT',
			body: JSON.stringify({
				name : this.state.name
			}),
			headers : {
				'Content-Type' : 'application/json'
			}
		})
		.then(response => response.json())
		.then(responseJSON => console.log(responseJSON))
		.catch(err => console.log(err))

		this.setState({
			name : ''
		})
	}


	render(){
		return(
			<div>
				<Header />
				<form onSubmit = {this.handleSubmit}>
				<input
				type ="text"
				id = 'name'
				onChange = {this.handleChange}

				/>
				<input type="submit" value="update"/>
				</form>
			</div>
		)
	}
}

export default Update
