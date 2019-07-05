import React, { Component } from 'react'
import Header from './Header.js'

class FilmDetail extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <h3>Film Details, etc.</h3>
        <img
          src={this.props.movie.poster.length? movie.poster: "http://media1.myfolio.com/users/getrnd/images/mkay4a6gy1.jpg"}
          height='400px'
        />
      </div>
    )
  }
}

export default FilmDetail
