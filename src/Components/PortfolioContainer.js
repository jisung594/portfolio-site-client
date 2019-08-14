import React, { Component } from 'react';
import ProjectList from './ProjectList';
import '../Styling/Projects.scss'
// import { Link } from 'react-router-dom';

class PortfolioContainer extends Component {
  state = {
    clicked: "dev"
  }

  clickHandler = (event) => {
    this.setState({
      clicked: event.target.id
    })
  }

  render () {
    let devProjectList
    if (this.props.projects["devProjects"].length > 0) {
      devProjectList = this.props.projects["devProjects"].map(projectObj => {
        return <ProjectList project={projectObj} key={projectObj.id}/>
      })
    }

    let designProjectList
    if (this.props.projects["designProjects"].length > 0) {
      designProjectList = this.props.projects["designProjects"].map(projectObj => {
        return <ProjectList project={projectObj} key={projectObj.id}/>
      })
    }

    return (
      <div className="portfolio-page">
        <div className="portfolio-type">
          <span id="dev" onClick={this.clickHandler} style={this.state.clicked === "dev" ? {color:"#E8175D"} : {color:"#3c4b52"}}>DEV</span>
          <span>|</span>
          <span id="design" onClick={this.clickHandler} style={this.state.clicked === "design" ? {color:"#E8175D"} : {color:"#3c4b52"}}>DESIGN</span>
        </div>

        <div className="portfolio-container" style={
          this.state.clicked === "dev" ? null : {"grid-template-columns": "30vw 30vw 30vw"}}>
          {this.state.clicked === "design" ? designProjectList : devProjectList}
        </div>
      </div>
    )
  }
}

export default PortfolioContainer
