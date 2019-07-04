import React, { Component } from 'react'
import Header from './Header.js'

let baseURL = `http://localhost:3003/filmfinder/`


class MyFilms extends Component {





  render() {
    return (
      <div>
        <Header />
        <h2>My Films</h2>
        {
          this.props.userDiary ?
          this.props.userDiary.map((movie) => (
            <img
              src={movie.poster}
              height='200px'
            />
          )
        ) : <h3>add to your diary!</h3>
        }
      </div>
    )
  }
}

export default MyFilms
