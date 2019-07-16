import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    this.callBackend()
      .then(res => this.setState({data: res.express}))
      .catch(err => console.log(err))
  }

  callBackend = async () => {
    const response = await fetch('/express-backend')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.data}</p>
        </header>
      </div>
    );
  }
}

export default App;
