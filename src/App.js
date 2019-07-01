import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Update from './components/update.js'

let baseURL = `http://localhost:3003/filmfinder`

class App extends Component {

/// function to get all movies from collection using test route
  getMovies = () => {
    fetch(baseURL + '/test')
    .then(data => data.json(),
    err => console.log(err))
    .then(parsedData => console.log(parsedData))
  }
  componentDidMount() {
    this.getMovies()
  }
//////

  render(){
    return (
      <div className="App">
        <Header />
        <Update />
      </div>
    );
  }
}

export default App;
