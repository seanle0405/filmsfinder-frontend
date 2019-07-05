import React, { Component } from 'react'
import Header from './Header.js'

let baseURL = `http://localhost:3003/filmfinder/`


class MyFilms extends Component {





  render() {
    return (
      <div>
        <Header />
        {
          console.log(this.props.userDiary)
        }
        {
          this.props.userDiary.length ?
          this.props.userDiary.map((movie) => (
            <>
            <h2>My Films</h2>
            <img
              src={movie.poster}
              height='200px'
            />
            <p
              onClick={() => {
                this.props.deleteMovie(movie)
              }}
              >X</p>
          </>
          )
        ) : <h3>add to your diary!</h3>
        }
      </div>
    )
  }
}

export default MyFilms
