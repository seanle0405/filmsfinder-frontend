import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import cities from "../data/showtimesCities.js"

const cookies = new Cookies()

const getCityId = (cityName) =>{
  let cityId = 2215
  for(let i = 0; i < cities.length; i++){
    if(cityName == cities[i].name){
      cityId = cities[i].id
      break
    }
  }
  return cityId
}

class CreateAccount extends Component {
  state = {
    username: '',
    password: '',
    city: '',
    cities_list: cities,
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.props.baseURL + 'users', {
      method: 'POST',
      body:
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          city: this.state.city,
          city_id: getCityId(this.state.city)
        }),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then(json => {
        this.handleAddCookie(json)
        this.setState({
          username: '',
          password: '',
          city: ''
        })
      })
  }

  handleAddCookie = (json) => {
    console.log(json);
    cookies.set('user', json.username, {path:'/'})
    this.props.refreshCurrentUser()
  }

  render() {
    return (
      <div>
        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit}>
          <label> Username :
            <input
              type='text'
              id='username'
              name='username'
              onChange={this.handleChange}
              value={this.state.username}
              placeholder='Username'
            />
          </label><br/>
          <label> Password :
            <input
              type='password'
              id='password'
              name='password'
              onChange={this.handleChange}
              value={this.state.password}
              placeholder='Password'
            />

          </label><br/>

          <label>City : </label>
          <input  type="text" onChange={this.handleChange} value={this.state.city} id="city" placeholder="City" list="cities_list"/>
          <datalist id = "cities_list">
            {this.state.cities_list.map((city) =>{
              return(<option value = {city.name}/>)
            } )}
          </datalist><br/>

          <input
            type='submit'
            value='Create Account'
          />
        </form>
      </div>
    )
  }
}

export default CreateAccount
