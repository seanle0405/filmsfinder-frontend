import React, { Component } from 'react'


class Splash extends Component {
	
	render() {

		return (

      		<div>
				<h1> Recent Releases</h1>
				{
					this.props.splash ?

					this.props.splash.map( movie => (


						<img href = '#'> {movie.title}</img>
					))
					:
					''
				
				
				}
			</div>

		)

	}

}


export default Splash
