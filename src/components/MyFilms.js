import React, { Component } from 'react'
import Header from './Header.js'

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
        <Header />
          <h2>My Films</h2>
        {
          console.log(this.props.userDiary)
        }
        {
          this.props.userDiary.length ?
            this.props.userDiary.map((movie) => (
              <>
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
          ) :
          <h3>add to your diary!</h3>
        }
      </div>
    )
  }
}

export default MyFilms
