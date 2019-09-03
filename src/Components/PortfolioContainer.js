import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import '../Styling/Projects.scss'
// import { Link } from 'react-router-dom';

class PortfolioContainer extends Component {
  componentDidMount() {
    this.setState({
      mounted: true
    })

    let loading = document.querySelector(".loading")
    loading.innerText = ""
    loading.style.display = "none"
  }

  state = {
    mounted: false,
    clicked: "dev"
  }

  clickHandler = (event) => {
    this.setState({
      clicked: event.target.id
    })
  }

  render () {
    let devProjectCards
    if (this.props.projects["devProjects"].length > 0) {
      devProjectCards = this.props.projects["devProjects"].map(projectObj => {
        return <ProjectCard project={projectObj} key={projectObj.id}/>
      })
    }

    let designProjectCards
    if (this.props.projects["designProjects"].length > 0) {
      designProjectCards =  this.props.projects["designProjects"].map(projectObj => {
        return <ProjectCard project={projectObj} key={projectObj.id}/>
      })
    }


    return (
      <div className="portfolio-page">
        <div className="portfolio-type">
          <span id="dev" onClick={this.clickHandler} style={this.state.clicked === "dev" ? {color:"#E8175D"} : {color:"#3c4b52"}}>DEV</span>
          <span>|</span>
          <span id="design" onClick={this.clickHandler} style={this.state.clicked === "design" ? {color:"#E8175D"} : {color:"#3c4b52"}}>DESIGN</span>
        </div>

        <h1 className="loading">HEROKU IS SO SLO W W   W</h1>

        <div className="portfolio-container" style={this.state.clicked === "dev"
          ? null
          : {
              display: "grid",
              gridTemplateColumns: "32vw 32vw 32vw",
              gridTemplateRows: "32vw 32vw 32vw",
              gridColumnGap: "1vw",
              gridRowGap: "1vw",
              margin: "2vw auto",

            }
        }>
          {this.state.clicked === "design" ? designProjectCards : devProjectCards}
        </div>
      </div>
    )
  }
}

export default PortfolioContainer
