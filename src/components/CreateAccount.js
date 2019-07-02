import React, { Component } from 'react'

class CreateAccount extends Component {
  render() {
    return (
      <div>
        <h2>Create Account</h2>
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
            value='Create Account'
          />
        </form>
      </div>
    )
  }
}

export default CreateAccount
