import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const cookies = new Cookies()

class Header extends Component {
  state = {
    loggedIn: false
  }

  handleLogOut = () => {
    cookies.remove('user')
  }

  render() {
    return (
      <div>
        <h1>Films Finder</h1>
          <nav>
            <Link to='/'>{ 'Home' }</Link>
            {'  '}
            <Link to='/myfilms'>{ 'My Films' }</Link>
            {'  '}
            {/*if logged out, .inks for signup an create account will render*/}
            <Link to='/SignIn'>{ 'Sign In' }</Link>
            {'  '}
            <Link to='/CreateAccount'>{ 'Create Account' }</Link>
            {/*if logged in, username and link to log out will render*/}
            {'  '}
            <Link to='/' refresh= 'true' onClick={ this.handleLogOut }>{ 'Log Out' }</Link>
          </nav>
      </div>
    )
  }
}

export default Header
