import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import WatchedMovies from './WatchedMovies.js'
import WatchList from './WatchList.js'


let baseURL = `http://localhost:3003/filmfinder/`


class MyFilms extends Component {


  render() {
    return (
      <>

      <Router>
        <Link
          to='/myfilms/'
          >
          <h3>My Movies</h3>
        </Link>
        <Link
          to='/myfilms/watchlist'
          >
          <h3>Watchlist</h3>
        </Link>
        <Route
          path='/myfilms'
          render = {(routeProps) => (
            <WatchedMovies
              {...routeProps}
              userDiary={this.props.userDiary}
              deleteMovie={this.props.deleteMovie}
              movie={this.props.movie}
              getMovie={this.props.getMovie}
              />
            )}
          />

          <Route
            path='/myfilms/watchlist'
            render = {(routeProps) => (
              <WatchList
                {...routeProps}
                userDiary={this.props.userDiary}
                deleteMovie={this.props.deleteMovie}
                movie={this.props.movie}
                getMovie={this.props.getMovie}
                />
              )}
          />






      </Router>


      </>

    )
  }
}

export default MyFilms
