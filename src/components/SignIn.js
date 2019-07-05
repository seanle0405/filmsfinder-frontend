import React, { Component } from 'react'
import Cookies from 'universal-cookie'


const cookies = new Cookies()

let myUser = cookies.get('user')



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
    fetch(this.props.baseURL + 'sessions', {
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
      .then(json => {
        this.handleAddCookie(json)
        this.setState({
          username: '',
          password: ''
        })
      })
  }

  handleAddCookie = (json) => {

    cookies.set('user', json.foundUser, {path:'/'})
    this.props.refreshCurrentUser()
    this.props.getUserData(json.foundUser)
  }


  render() {
    return (
      <div>
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
