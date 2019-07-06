import React, { Component } from 'react'


class Splash extends Component {

	render() {

		return (

      		<div>
				<blockquote class ="blockquote"> Recent Releases</blockquote>
				{
					this.props.splash ?

					this.props.splash.map( movie => (


						<>
							<img href = {movie.poster} />
							<h3> {movie.title}</h3>
						</>

					))
					:
					''


				}
			</div>

		)

	}

}


export default Splash
