import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Splash extends Component {

	render() {

		return (

      		<div>
				<blockquote class ="blockquote"> Recent Releases</blockquote>
				{
					this.props.splash ?

					this.props.splash.map( movie => (


						<>
							<div className="card mb-3 cssCard">
					          <div className="row no-gutters">
					            <div className="col-md-4">
					            <Link
					              key={movie.imdb_id}
					              onClick={() => this.props.getMovie(movie)}
					              to='/filmdetail'>{
					                <img
					                  src={movie.poster}
					                  className="card-img"
					                />
					              }
					              </Link>
					            </div>
					          <div className="col-md-8">
					            <div className="card-body">
					              <h5 className="card-title">{movie.title}</h5>
					              <p className="card-text synopsis">
					                {movie.synopsis}
					              </p>					              
					            </div>
					          </div>
					        </div>
					      </div>
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
