import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Header.js'


class FilmDetail extends Component {
  render() {
    return (
      <div>
        <Link
          to='/myfilms'> { <h6>Back to My Films</h6> }
        </Link>
        <h2>{this.props.movie.title}</h2>
        <img
          src={this.props.movie.poster}
          height='400px'
        />
        <h4>Genre: {this.props.movie.genres}</h4>
        <h4>Released: {this.props.movie.release_dates}</h4>
        <h4>Director: </h4>
        <h4>Cast: </h4>
        <h4>Synopsis: {this.props.movie.synopsis}</h4>
        <h4>IMDB Rating: {this.props.movie.imdb_rating}</h4>
      </div>
    )
  }
}

export default FilmDetail
