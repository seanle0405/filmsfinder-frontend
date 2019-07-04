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
  handleSubmitLogIn = (event) => {
    event.preventDefault();
    fetch(baseURL + 'sessions', {
      method: 'POST',
      body:
        JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(response => {
        return response.json()
      })
      .then(json => console.log(json),
        error => console.log(error))
    }
  render() {
    return (
      <div>
        <Header />
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmitLogIn}>
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
