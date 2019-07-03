

// import logo from './logo.svg';

import React, { Component } from 'react';
import logo from './logo.svg';
// >>>>>>> 1866d1d727a0f200d6286eec7aa12346cb260d77
import './App.css';
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
      <h1>Films Finder</h1>
        <Update 

        />

      </div>
    );
  }
}

export default App;
