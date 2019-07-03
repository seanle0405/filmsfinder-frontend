import React, { Component } from 'react'
import Header from './Header.js'

let showtimesAPIKey = `?apikey=dHNYEAlSVxOXC4Eqy6b8aufIXC7utYnu`

class Search extends Component {
  state = {
<<<<<<< HEAD
<<<<<<< HEAD
    title :'' ,
  
=======
    search: ''
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
=======
    search: ''
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
<<<<<<< HEAD
<<<<<<< HEAD
      
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch()
  }
=======
=======
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
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


<<<<<<< HEAD
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
=======
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
  render() {
    return (
      <>
      <div>
        <Header />
<<<<<<< HEAD
<<<<<<< HEAD
        <form onSubmit = {this.handleSubmit}>
          <label > 
            Film title :
=======
=======
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
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
<<<<<<< HEAD
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
          </label>
            <input 
            type = 'text'
            id = 'title'
            value = {this.state.title}
            onChange = {this.handleChange}
            placeholder='Search Films' />
          <input type='submit' value='Search' />
          

=======
          </label>
          <input type='submit' value='Search' />
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
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
