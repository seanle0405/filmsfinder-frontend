////////////////////////////////////////////////////
//importing React and packages
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

//importing components and style sheets
import './App.css'
import Materialized from './materialize/css/materialize.css'
import Header from './components/Header.js'
import Search from './components/Search.js'
import MyFilms from './components/MyFilms.js'
import FilmDetail from './components/FilmDetail.js'
import CreateAccount from './components/CreateAccount.js'
import SignIn from './components/SignIn.js'
import Update from './components/update.js'
import Splash from './components/splash.js'

////////////////////////////////////////////////////

const cookies = new Cookies()

let currentUser = cookies.get('user')

//// building Splash URL
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
////////////////////////////////////////////////////

let baseURL = `http://localhost:3003/filmfinder/`

class App extends Component {
  state = {
    userID: currentUser,
    userDiary: '',
    splash: ''
  }

  refreshCurrentUser = () => {
    currentUser = cookies.get('user')
    if (currentUser) {
      this.setState({
        userID: currentUser
      })
    } else {
      this.setState({
        userID: '',
        userDiary: ''
      })
    }
  }


  getRecentReleases = () => {
    fetch(getRecentReleasesURL)
    .then(data => data.json(),
    err => console.log(err))
    .then(parsedData => this.setState({splash: parsedData}, () => {
      console.log(this.state.splash)
    }))
  }

  getUserData = (user) => {
    fetch(baseURL + 'getUser/' + user)
    .then(res => res.json(),
      err=> console.log(err))
    .then(resJson => this.setState({
      userDiary: resJson[0].movies
    }),
      err=> console.log(err))
  }

  addToDiary = (movie) => {
    this.refreshCurrentUser()
    if (currentUser) {
      fetch(baseURL + `addMovie`, {
        method: 'POST',
        body: JSON.stringify({
          username: currentUser,
          movie,
          watched: false
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          userDiary: resJson.movies
        })
      })
    } else {
      console.log('no currentuser');
    }

  }

  deleteMovie = (movie) => {
    this.refreshCurrentUser()
    fetch(baseURL, {
      method: 'DELETE',
      body: JSON.stringify({
        username: currentUser,
        movie
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json(),
      err => console.log(err))
    .then(resJson => this.setState({
      userDiary: resJson.movies
    }))

  }


  componentDidMount = () => {
    this.getRecentReleases();
    this.refreshCurrentUser();
    if (currentUser) {
      console.log(currentUser, 'about to getdiary');
      this.getUserData(currentUser)
    }
  }

  //function above to get all movies from collection using test route



  render(){
    return (
      <>
      <Router>
        <div className="App">
          {
            currentUser ?
            <h2
              >Welcome {currentUser}</h2>
              :
              null
          }


          <Header
            refreshCurrentUser={this.refreshCurrentUser}
            currentUser={currentUser}
          />




          <Route exact path='/' component = {Splash} />

          <Route
            exact
            path='/search'
            render={(routeProps) => (
              <Search
                {...routeProps}
                addToDiary={this.addToDiary}
            />)}
          />

          <Route
            path='/myfilms'
            render={(routeProps) => (
              <MyFilms
                {...routeProps}
                userDiary={this.state.userDiary}
                deleteMovie={this.deleteMovie}
              />
            )}
          />


          <Route path='/filmdetail' component={ FilmDetail } />

          <Route
            path='/createaccount'
            render={(routeProps) =>
              (<CreateAccount
                {...routeProps}
                baseURL={baseURL}
                handleAddUser={this.handleAddUser}
                refreshCurrentUser={this.refreshCurrentUser}
               />)}
          />
          <Route
            path='/signin'
            render={(routeProps) =>
              (<SignIn {...routeProps}
                baseURL={baseURL}
                refreshCurrentUser={this.refreshCurrentUser}
                getUserData={this.getUserData}
              />)}
          />
          <Route path='/update' component={ Update } />


        </div>
      </Router>
    </>
    );
  }
}

export default App;
