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
    .then(parsedData => console.log(parsedData))
  }



  render() {
    return (
      <div>
        <Header />

        
         

        <form
          onSubmit={this.handleSubmit}
          >   
         
           
        
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
