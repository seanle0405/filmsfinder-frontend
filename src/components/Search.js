import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div>
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
