import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
          <h2>My Films</h2>
        {
          console.log(this.props.userDiary)
        }
        {
          this.props.userDiary.length ?
            this.props.userDiary.map((movie) => (
              <>
              <Link
                to='/filmdetail'>{
                  <img
                    src={movie.poster}
                    height='200px'
                    />
                  }
              </Link>


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
