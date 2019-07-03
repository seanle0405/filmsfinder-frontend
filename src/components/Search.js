import React, { Component } from 'react'
import Header from './Header.js'

let showtimesAPIKey = `?apikey=dHNYEAlSVxOXC4Eqy6b8aufIXC7utYnu`

class Search extends Component {
  state = {
    title :'' ,
    search: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const movieQuery = this.state.search
    fetch(`https://api.internationalshowtimes.com/v4/movies?apikey=dHNYEAlSVxOXC4Eqy6b8aufIXC7utYnu&search_field=original_title&include_outdated=true&all_fields=true`+`&search_query=` + movieQuery)
    .then(data => data.json())
    .then(parsedData => {
      parsedData.meta_info.total_count ?
      this.setState({
        search: '',
        results: parsedData
      }) :
      this.setState({
        search: '',
        noresults: true
      })
    })
  }

  render() {
    return (
      <>
      <div>
        <Header />
        <form
          onSubmit={this.handleSubmit}
          >
          <label >
            <input
            onChange={this.handleChange}
            id='search'
            type='text'
            placeholder='Search Films'
            value={this.state.search}
            />
          <input type='submit' value='Search' />
          </label>
          <input type='submit' value='Search' />
        </form>


      {
        this.state.results ?
        <img src={this.state.results.movies[1].poster_image.image_files[this.state.results.movies[1].poster_image.image_files.length-1].url} height='400px'></img>
        :
        null
      }
      {
        this.state.noresults ?
        <h1>sorry no results for that</h1>
       :
      null
    }


      </div>
    </>
    )
  }
}

export default Search
