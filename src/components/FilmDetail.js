import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const city_id = 2215
const movie_id = 47080

class FilmDetail extends Component {
  state = {
    review: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const enterReview = this.state.review

  }
  getShowtimes = (event) => {
    event.preventDefault()
    const city = city_id
    const movie = this.props.movie.showtimes_id
    fetch(this.props.baseURL + 'showtimes/' + city + '/' + movie)
      .then(data => data.json())
      .then(parsedData => {
        console.log(parsedData)
        if (parsedData.length) {
          this.setState({
            showtimes: parsedData
          })
        }
      })
  }
  render() {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <img
          src={this.props.movie.poster}
          height='400px'
        />
        <h4>Released: {this.props.movie.release_dates}</h4>
        <h4>Genre: {this.props.movie.genres}</h4>
        <h4>Synopsis: {this.props.movie.synopsis}</h4>
        <h4>IMDB Rating: {this.props.movie.imdb_rating}</h4>






      {
      !this.props.currentUser ?
      <>
        <Link
          key={this.props.movie.imdb_id}
          to='/SignIn'> {
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.props.addToDiary(this.props.movie, true)
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
              this.props.addToDiary(this.props.movie, false)
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
          this.props.addToDiary(this.props.movie, true)
        }}
        >Mark as Watched
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          this.props.addToDiary(this.props.movie, false)
        }}
        >Add to Watchlist</button>
      </>
    }

    <form
      onSubmit={this.handleSubmit}
    >
      <label>
        <input
          onChange={this.handleChange}
          id='review'
          type='textarea'
          placeholder='What did you think?'
          value={this.state.review}
        />
      </label>
      <input
        type='submit'
        value='save'
      />
    </form>
    <form
      onSubmit={this.getShowtimes}
    >
      <label>
        <input
          type='submit'
          value='get showtimes'
        />
      </label>
    </form>
    <div>
      {
        this.state.showtimes ?

        this.state.showtimes.map((movie) => (
          movie.showtimes.map((times) => (
            <div>
            <h4>{movie.cinema_name}</h4>
            <li>{times.start_at}</li>
            </div>
          ))

        )
      )
      : null

      }
    </div>

    </div>


    )
  }
}

export default FilmDetail
