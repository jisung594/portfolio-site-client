import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import './App.css';
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  state = {
    devProjects: [],
    designProjects: []
  }

  componentDidMount() {
    this.callBackend()
      .then(res => this.setState({
        devProjects: res[0],
        designProjects: res[1]
      }))
      .catch(err => console.log(err))
  }

  callBackend = async () => {
    const response = await fetch('/api/projects')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <MainContainer projects={this.state}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
