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

let baseURL = `http://localhost:3003/filmfinder`

class App extends Component {

  //function below to get all movies from collection using test route
  getMovies = () => {
    fetch(baseURL + '/test')
    .then(data => data.json(),
    err => console.log(err))
    .then(parsedData => console.log(parsedData))
  }
  componentDidMount() {
    this.getMovies()
  }
  //function above to get all movies from collection using test route

  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ Search } />
          <Route path='/myfilms' component={ MyFilms } />
          <Route path='/filmdetail' component={ FilmDetail } />
          <Route path='/createaccount' component={ CreateAccount } />
          <Route path='/signin' component={ SignIn } />
          <Route path='/update' component={ Update } />
        </div>
      </Router>
    );
  }
}

export default App;
