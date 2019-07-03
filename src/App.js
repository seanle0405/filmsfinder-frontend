import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Search from './components/Search.js'
import MyFilms from './components/MyFilms.js'
import FilmDetail from './components/FilmDetail.js'
import CreateAccount from './components/CreateAccount.js'
import SignIn from './components/SignIn.js'
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
    users: [],
    userID: 'testUserName',
    userDiary: '',
    splash: ''
  }

/// function to get all movies from collection using test route
  getUserData = (userID) => {
    fetch(baseURL + `getUser/${this.state.userID}`)
  }
  //function below to get all movies from collection using test route
  getMovies = () => {
    fetch(baseURL + '/test')
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
    this.getRecentReleases()
    this.getUserData()
  }
  //function above to get all movies from collection using test route

  handleAddUser = (user) => {
    const copyUsers = [...this.state.users]
    copyUsers.push(user)
    this.setState({
      users: copyUsers
    })
  }

  //function below passed to sessions
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(baseURL + 'sessions', {
      method: 'POST',
      body:
        JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then(jsonResponse => {
        this.setState({
          username: '',
          password: ''
        })
        this.props.handleAddUser(jsonResponse)
      })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ Search } />
          <Route path='/myfilms' component={ MyFilms } />
          <Route path='/filmdetail' component={ FilmDetail } />
          <Route
            path='/createaccount'
            render={(routeProps) =>
              (<CreateAccount {...routeProps}
                baseURL={baseURL}
                handleAddUser={this.handleAddUser}
               />)}
          />
          <Route
            path='/signin'
            render={(routeProps) =>
              (<SignIn {...routeProps}
                handleSubmit={this.handleSubmit}
              />)}
          />
          <Route path='/update' component={ Update } />
        </div>
      </Router>
    );
  }
}

export default App;
