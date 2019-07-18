import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import PortfolioContainer from './Components/PortfolioContainer'
import './App.css';


class App extends Component {
  state = {
    devProjects: null,
    designProjects: null
  }

  componentDidMount() {
    this.callBackend()
      .then(res => this.setState(
        {
          devProjects: res[0],
          designProjects: res[1]
        }
      ))
      .catch(err => console.log(err))
  }

  callBackend = async () => {
    const response = await fetch('/api/dev-projects')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }


  render () {
    // console.log(this.state.devProjects)

    return (
      <div className="App">
        <Navbar />
        <PortfolioContainer projects={this.state.devProjects}/>

        {/*
          <p>{this.state.devProjects ? this.state.devProjects[0]["name"] : "loading"}</p>
          <p>{this.state.devProjects ? this.state.devProjects[1]["name"] : "loading"}</p>
          <p>{this.state.devProjects ? this.state.devProjects[2]["name"] : "loading"}</p>

          <p>{this.state.designProjects ? this.state.designProjects[0]["name"] : "loading"}</p>
          <p>{this.state.designProjects ? this.state.designProjects[1]["name"] : "loading"}</p>
        */}
      </div>
    );
  }
}

export default App
