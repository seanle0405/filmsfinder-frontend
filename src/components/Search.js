import React, { Component } from 'react'


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


        </form>


      {
        this.state.results ?

        this.state.results.map(movie => (
          <div>
          <h3>{movie.title}</h3>
          <img
            src={movie.poster.length? movie.poster: "http://media1.myfolio.com/users/getrnd/images/mkay4a6gy1.jpg"}
            height='400px'
            // key={movies.imdb}
            onClick={() => {
              this.props.addToDiary(movie)
            }}
          />
        </div>

        ))

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
