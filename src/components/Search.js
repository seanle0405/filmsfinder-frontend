import React, { Component } from 'react'
import Header from './Header.js'

class Search extends Component {
  state = {
    title :'' ,
  
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
      
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch()
  }
  render() {
    return (
      <div>
        <Header />
        <form onSubmit = {this.handleSubmit}>
          <label > 
            Film title :
          </label>
            <input 
            type = 'text'
            id = 'title'
            value = {this.state.title}
            onChange = {this.handleChange}
            placeholder='Search Films' />
          <input type='submit' value='Search' />
          

        </form>

        {/* RETURNED RESULTS GO HERE */}

      </div>
    )
  }
}

export default Search
