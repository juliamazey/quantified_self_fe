import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
    var url = "http://localhost:4000/api/v1/login"
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        email: 'no@gmail.com',
        password: 'password'
      })
    })
    .then(response => response.json())
    .then(response => document.cookie = `apiKey=${response.apiKey}`)
    .then(response => console.log('success:', response))
    .catch(error => alert('Invalid username or password'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name='email' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input name='password' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;
