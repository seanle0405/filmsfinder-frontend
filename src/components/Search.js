import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


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

    <div className="container-fluid">

      {
        this.state.results ?

        this.state.results.map((movie) => (

        <>
        <div className="card mb-3 cssCard">
          <div className="row no-gutters">
            <div className="col-md-4">

            <Link
              key={movie.imdb_id}
              onClick={() => this.props.getMovie(movie)}
              to='/filmdetail'>{
                <img
                  src={movie.poster.length? movie.poster: "http://media1.myfolio.com/users/getrnd/images/mkay4a6gy1.jpg"}
                  className="card-img"
                />
              }
              </Link>
            </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                {movie.synopsis}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  IMDB score: {movie.imdb_rating}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {
      !this.props.currentUser ?
      <>
        <Link
          key={movie.imdb_id}
          to='/SignIn'> {
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.props.addToDiary(movie, true)
          }}
          >Mark as Watched
        </button>
          }
        </Link>
        <Link
        to='/SignIn'> {
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.addToDiary(movie, false)
            }}
            >Add to Watchlist</button>
          }
          </Link>
      </>
      :
      <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          this.props.addToDiary(movie, true)
        }}
        >Mark as Watched
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          this.props.addToDiary(movie, false)
        }}
        >Add to Watchlist</button>
      </>
    }


        </>

        ))

        :
        null
      }


  </div>




      {
        this.state.noresults ?
        <h1>sorry no results for that</h1>
       :
      null
    }

    </>
    )
  }
}

export default Search
