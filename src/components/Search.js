import React, { Component } from 'react'
import Header from './Header.js'

let showtimesAPIKey = `?apikey=dHNYEAlSVxOXC4Eqy6b8aufIXC7utYnu`

class Search extends Component {
  state = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
    title :'' ,
  
=======
    search: ''
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
<<<<<<< HEAD
=======
=======
    search: ''
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
      
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch()
  }
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const movieQuery = this.state.search
    fetch(`https://api.internationalshowtimes.com/v4/movies?apikey=dHNYEAlSVxOXC4Eqy6b8aufIXC7utYnu&search_field=original_title&include_outdated=true&all_fields=true`+`&search_query=` + movieQuery)
    .then(data => data.json())
    .then(parsedData => console.log(parsedData))
  }


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
=======
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
  render() {
    return (
      <div>
        <Header />
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
        <form onSubmit = {this.handleSubmit}>
          <label > 
            Film title :
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
        <form
          onSubmit={this.handleSubmit}
          >
          <label >
            <input
            onChange={this.handleChange}
            id='search'
            type='text'
            placeholder='Search Films'
            />
<<<<<<< HEAD
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
=======
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
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
          </label>
            <input 
            type = 'text'
            id = 'title'
            value = {this.state.title}
            onChange = {this.handleChange}
            placeholder='Search Films' />
          <input type='submit' value='Search' />
<<<<<<< HEAD
          

=======
>>>>>>> 1b4196a355a217978fc6ecb531551cae2adaa2e5
>>>>>>> 44d9dfcb31f47af22f7a85cc207279fc26388367
        </form>

        {/* RETURNED RESULTS GO HERE */}

      </div>
    )
  }
}

export default Search
