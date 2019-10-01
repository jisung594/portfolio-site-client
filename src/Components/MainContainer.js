import React, { Component } from 'react';
import Homepage from './Homepage'
import PortfolioContainer from './PortfolioContainer'
import About from './About'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom'
import '../Styling/App.scss'

class MainContainer extends Component {


  render () {
    return (
      <div className='main-container'>
        <Switch>
          <Route path='/' component={Homepage} onLoad={console.log("hi")} exact/>
          <Route path='/work' render={()=> {
            return <PortfolioContainer projects={this.props.projects}/>
          }}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    )
  }
}

export default MainContainer;
