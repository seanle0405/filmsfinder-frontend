import React, { Component } from 'react'
import Header from './Header.js'

class MyFilms extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>My Films</h2>
        <p>Show: Seen / Unseen </p>
      </div>
    )
  }
}

export default MyFilms
