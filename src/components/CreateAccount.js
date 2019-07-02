import React, { Component } from 'react'
import Header from './Header.js'

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
    fetch(this.props.baseURL + '/newuser', {
      method: 'POST',
      body:
        JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then(jsonResponse => {
        this.setState({
          username: '',
          password: ''
        })
        this.props.handleAddUser(jsonResponse)
      })
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
              id='username'
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
