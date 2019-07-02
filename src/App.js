import React, { Component } from 'react';
import './App.css';
import Update from './components/update.js'





let baseURL = `http://localhost:3003/filmfinder/`


let cityId = 3945
let releaseDate = '06-01-19'

let showtimesBaseURL = `https://api.internationalshowtimes.com/v4/`
let moviesParam = 'movies/'
let timesParam = 'showtimes/'
let showtimesAPIKey = `?apikey=dHNYEAlSVxOXC4Eqy6b8aufIXC7utYnu`
let releaseDateParam = '&release_date_from=' + releaseDate
let countryParam = `&countries=US`
let fieldsParam = `&all_fields=true`
let cityParam = `&city_ids=` + cityId




let getRecentReleasesURL = showtimesBaseURL+moviesParam+showtimesAPIKey+releaseDateParam+countryParam+fieldsParam+cityParam



class App extends Component {
  state = {
    userID: 'testUserName',
    userDiary: '',
    splash: '',

  }

/// function to get all movies from collection using test route
  getUserData = (userID) => {
    fetch(baseURL + `getUser/${this.state.userID}`)
    .then(data => data.json(),
    err => console.log(err))
    .then(parsedData => this.setState({userDiary: parsedData}, () => {
      console.log(this.state.userDiary);
    }))
  }

  getRecentReleases = () => {
    fetch(getRecentReleasesURL)
    .then(data => data.json(),
    err => console.log(err))
    .then(parsedData => this.setState({splash: parsedData}, () => {
      console.log(this.state.splash)
    }))
  }

  componentDidMount() {
    // this.getRecentReleases()
    // this.getUserData()
  }
//////

  render(){


    return (
      <div className="App">
      <h1>Films Finder</h1>
        <Update

        />

      </div>
    );
  }
}

export default App;
