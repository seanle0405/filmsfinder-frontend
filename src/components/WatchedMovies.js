import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let baseURL = `http://localhost:3003/filmfinder/`

class WatchedMovies extends Component {



  render() {
    return(
      <>
      <h3>Movies I've Seen</h3>
      {
        this.props.userDiary.length ?
          this.props.userDiary.filter((movie) =>  movie.watched).map((movie,index) => (
            <>
            <div
                className='movie'>
            <Link
              key={movie.imdb_id}
              onClick={() => this.props.getMovie(movie)}
              to='/filmdetail'>{
                <img
                  key={`${movie.imdb_id}_${index}`}
                  src={movie.poster}
                  height='400px'
                  />
                }
            </Link>

              <p
                key={`${movie.imdb_id}_${index}_delete`}
                onClick={() => {
                  this.props.deleteMovie(movie)
                }}
                >X</p>
              </div>
            </>
          )
        )
        : null
      }

      </>
    )
  }
}

export default WatchedMovies
