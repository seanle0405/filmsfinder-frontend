import React, { Component } from 'react'
import Header from './Header.js'

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  render() {
    return (
      <div>
        <Header />
        <h2>Sign In</h2>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={this.handleChange}
              value={this.state.username}
              placeholder='Username'
            />
          </label>
          <label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={this.handleChange}
              value={this.state.password}
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
