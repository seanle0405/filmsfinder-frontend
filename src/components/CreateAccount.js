import React, { Component } from 'react'
import Header from './Header.js'

class CreateAccount extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <div>
      <Header />
        <h2>Create Account</h2>
        <form>
          <label>
            <input
              type='text'
              name='username'
              onChange={this.handleChange}
              value={this.state.username}
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
            value='Create Account'
          />
        </form>
      </div>
    )
  }
}

export default CreateAccount
