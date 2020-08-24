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
    clicked: "dev",
    imgWasHovered: false,
    imgWasClicked: false,
    hoveredProject: {},
    clickedProject: {}
  }

  imgHoverHandler = (projectObj) => {
    this.setState({
      imgWasHovered: !this.state.imgWasHovered,
      hoveredProject: projectObj
    })
  }

  imgClickHandler = (projectObj) => {
    this.setState({
      imgWasClicked: true,
      clickedProject: projectObj
    })
  }

  closeModule = () => {
    this.setState({
      imgWasClicked: false,
      clickedProject: {}
    })
  }

  clickHandler = (event) => {
    this.setState({
      clicked: event.target.id,
      imgWasClicked: false
    })

    let portfolioContainer = document.querySelector(".portfolio-container")

    if ((event.target.id === "design" && portfolioContainer.classList.contains("design-projects")) || event.target.id === "dev") {
      portfolioContainer.classList.remove("design-projects")
    } else {
      portfolioContainer.classList.add("design-projects")
    }
  }


  render () {
    let devProjectCards
    if (this.props.projects["devProjects"].length > 0) {
      devProjectCards = this.props.projects["devProjects"].map(projectObj => {
        return <ProjectCard
          project={projectObj}
          key={projectObj.id}
          imgHoverHandler={this.imgHoverHandler}
          imgWasHovered={this.state.imgWasHovered}
          hoveredProject={this.state.hoveredProject}
        />
      })
    }

    let designProjectCards
    if (this.props.projects["designProjects"].length > 0) {
      designProjectCards =  this.props.projects["designProjects"].map(projectObj => {
        return <ProjectCard
          project={projectObj}
          key={projectObj.id}
          imgClickHandler={this.imgClickHandler}
        />
      })
    }


    // ---------------------------------------------
    console.log(this.state.hoveredProject.name, this.state.imgWasHovered);
    // ---------------------------------------------



    return (
      <div className="portfolio-page">
        <div className="portfolio-type">
          <span id="dev"
            onClick={this.clickHandler}
            style={
              this.state.clicked === "dev"
              ? {color:"#E8175D"}
              : {color:"#3c4b52"}
            }>DEV</span>
          <span>|</span>
          <span
            id="design"
            onClick={this.clickHandler}
            style={
              this.state.clicked === "design"
              ? {color:"#E8175D"}
              : {color:"#3c4b52"}
            }>DESIGN</span>
        </div>

        <h1 className="loading">SO SLO W W   W    sorry</h1>

        <div
          className="portfolio-container"
          style={this.state.imgWasClicked ? {opacity:"10%"}: {opacity:"100%"}
        }>

          {
            this.state.clicked === "design"
            ? designProjectCards
            : devProjectCards
          }
        </div>

        {
          this.state.clickedProject.type === "design"
          ? <div className="popup-module">
              <div>
                <img src={this.state.clickedProject["img"]} alt={this.state.clickedProject["name"]}/>
                <center>
                  <span onClick={this.closeModule}>&times;</span>
                </center>
              </div>
              <h3>{this.state.clickedProject["name"]}</h3>
            </div>
          : null
        }
      </div>
    )
  }
}

export default PortfolioContainer
