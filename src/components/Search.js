import React, { Component } from 'react'
import Header from './Header.js'

class Search extends Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label>
            <input type='text' name='search' placeholder='Search Films' />
          </label>
          <input type='submit' value='Search' />
        </form>

        {/* RETURNED RESULTS GO HERE */}

      </div>
    )
  }
}

export default Search
