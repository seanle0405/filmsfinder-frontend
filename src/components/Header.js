import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Header extends Component {
  state = {
    loggedIn: false
  }
  render() {
    return (
      <div>
        <h1>Films Finder</h1>
        <Link to='/'>{ 'Home' }</Link>
        <br/>
        {/*if logged out, .inks for signup an create account will render*/}
        <Link to='/SignIn'>{ 'Sign In' }</Link>
        <Link to='/CreateAccount'>{ 'Create Account' }</Link>
        {/*if logged in, username and link to log out will render*/}
      </div>
    )
  }
}

export default Header
