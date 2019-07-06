import React, { Component } from 'react'

let baseURL = `https://filmfinderapp.herokuapp.com/filmfinder/`

if (window.location.href.includes('localhost')) {
 baseURL = `http://localhost:3003/filmfinder/`
} else {
 baseURL = `https://filmfinderapp.herokuapp.com/filmfinder/`
}

class Update extends Component {
		state = {
			name : ''

		}


	handleChange = (event) => {
		this.setState({
			[event.target.id] : event.target.value
		},() => {
			console.log(this.state.name)
		})

	}

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
