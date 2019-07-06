import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let baseURL = `https://filmfinderapp.herokuapp.com/filmfinder/`

class WatchList extends Component {



  render() {
    return(
      <>
      <div className='movieContainer'>

      {
        this.props.userDiary.length ?
          this.props.userDiary.filter((movie) =>  !movie.watched).map((movie,index) => (
            <>
            <div
                className='movie'>
            <Link
              key={movie.imdb_id}
              onClick={() => this.props.getMovie(movie)}
              to='/filmdetail'>{
                <>
                <h3
                  className="movieTitles"
                >{movie.title}</h3>
                <img
                  key={`${movie.imdb_id}_${index}`}
                  src={movie.poster}
                  height='400px'
                  />
                </>
                }
            </Link>

              <button
                type="button"
                className="btn btn-danger"
                key={`${movie.imdb_id}_${index}_delete`}
                onClick={() => {
                  this.props.deleteMovie(movie)
                }}
                >X</button>
              </div>
            </>
          )
        )
        :
      <h3>add to your diary!</h3>
      }
      </div>
      </>
    )
  }
}

export default WatchList
