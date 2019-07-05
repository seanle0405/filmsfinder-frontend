import React, { Component } from 'react'
import Header from './Header.js'

class FilmDetail extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.poster} />
        <h4>Genre: {this.props.movie.genres}
        <h4>Released: {this.props.movie.release_date}</h4>
        <h4>Director: </h4>
        <h4>Cast: </h4>
        <h4>Synopsis: {this.props.movie.synopsis}
        <h4>IMDB Rating: {this.props.movie.imdb_rating}</h4>
      </div>
    )
  }
}

export default FilmDetail
