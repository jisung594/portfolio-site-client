import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import { BrowserRouter } from 'react-router-dom'
import './Styling/App.scss';


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
    // const response = await fetch('https://jonathanchoi-api.herokuapp.com/api/projects')
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
