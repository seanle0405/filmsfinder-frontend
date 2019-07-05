import React, { Component } from 'react'
import Header from './Header.js'

let showtimesAPIKey = `?apikey=dHNYEAlSVxOXC4Eqy6b8aufIXC7utYnu`

let baseURL = `http://localhost:3003/`

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
    fetch(baseURL+ `filmfinder/search/` + movieQuery)
    .then(data => data.json())
    .then(parsedData => {
      console.log(parsedData);
      if (parsedData.length) {
          this.setState({
            search: '',
            results: parsedData,
            noresults: null
          })
        } else {
          this.setState({
            search: '',
            noresults: true,
            results: null
          })
        }
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
          </label>
          
          <input type = "submit" value = "search"/>
        </form>


      {
        this.state.results ?

        // this.state.results.map(movies => (
          <img src={this.state.results[0].poster} height='400px'></img>
        // ))s

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
