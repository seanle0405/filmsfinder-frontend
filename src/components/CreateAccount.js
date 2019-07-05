import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import Header from './Header.js'

const cookies = new Cookies()

class CreateAccount extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.props.baseURL + 'users', {
      method: 'POST',
      body:
        JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then(json => {
        this.handleAddCookie(json)
        this.setState({
          username: '',
          password: ''
        })
      })
  }

  handleAddCookie = (json) => {
    console.log(json);
    cookies.set('user', json.username, {path:'/'})
    this.props.refreshCurrentUser()
  }

  render() {
    return (
      <div>
        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              id='username'
              name='username'
              onChange={this.handleChange}
              value={this.state.username}
              placeholder='Username'
            />
          </label>
          <label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={this.handleChange}
              value={this.state.password}
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
