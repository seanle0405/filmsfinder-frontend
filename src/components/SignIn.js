import React, { Component } from 'react'

class SignIn extends Component {
  render() {
    return (
      <div>
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
