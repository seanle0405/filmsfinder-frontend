import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let baseURL = `http://localhost:3003/filmfinder/`


class MyFilms extends Component {

  //  filterWatched = (diary) => {
  //   const watched = diary.filter(movie => movie.title==='Midsommar')
  //   return watched
  // }
  //
  // filterToWatch = (diary) => {
  //
  // }
  //
  // componentDidMount = () => {
  //   if (this.props.userDiary.length) {
  //     this.filterWatched(this.props.userDiary)
  //     // filterToWatch(this.props.userDiary)
  //   }
  // }

  render() {
    return (
      <div>
          <h2>My Films</h2>
        {
          console.log(this.props.userDiary)
        }
          <div className="movieContainer">
        {
          this.props.userDiary.length ?
            this.props.userDiary.map((movie, index) => (
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
          ) :
          <h3>add to your diary!</h3>
        }
      </div>
    </div>
    )
  }
}

export default MyFilms
