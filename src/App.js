import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import PortfolioContainer from './Components/PortfolioContainer'
import About from './Components/About'
import Contact from './Components/Contact'
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
    // console.log(this.state.devProjects)

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <PortfolioContainer projects={this.state.devProjects}/>
          <About/>
          <Contact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
