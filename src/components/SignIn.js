import React, { Component } from 'react'
import Header from './Header.js'


class SignIn extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Sign In</h2>
        <form>
          <label>
            <input
              type='text'
              name='username'
              placeholder='Username'
            />
          </label>
          <label>
            <input
              type='password'
              name='password'
              placeholder='Password'
            />
          </label>
          <input
            type='submit'
            value='Sign In'
          />
        </form>
      </div>
    )
  }
}

export default SignIn
