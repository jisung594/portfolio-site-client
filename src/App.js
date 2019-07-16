import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    this.callBackend()
      .then(res => this.setState({data: res}))
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
    console.log(this.state.data)

    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.data ? this.state.data[0]["name"] : "loading"}</p>
          <p>{this.state.data ? this.state.data[1]["name"] : "loading"}</p>
          <p>{this.state.data ? this.state.data[2]["name"] : "loading"}</p>
        </header>
      </div>
    );
  }
}

export default App;
