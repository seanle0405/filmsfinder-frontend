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
    this.props.refreshCurrentUser()
  }

  render() {
    return (
      <div>
        <h1>Films Finder</h1>
          <nav>
            <Link to='/'>{ 'Home' }</Link>
            {'  '}
            <Link to='/search'>{ 'Search' }</Link>
            {'  '}
            <Link to='/myfilms'>{ 'My Films'  }</Link>
            {'  '}
            { this.props.currentUser ?

              <Link to='/' refresh= 'true' onClick={ this.handleLogOut }>{ 'Log Out' }</Link>
              :
              <>

              <Link to='/SignIn'>{ 'Sign In' }</Link> {' '}

              <Link to='/CreateAccount'>{ 'Create Account' }</Link> {' '}

              </>

            }



          </nav>
      </div>
    )
  }
}

export default Header
