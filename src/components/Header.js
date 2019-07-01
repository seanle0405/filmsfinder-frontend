import React, { Component } from 'react'

class Header extends Component {
  state = {
    loggedIn: false
  }
  render() {
    return (
      <h1>Films Finder</h1>
    )
  }
}

export default Header 
