import React, { Component } from 'react';
import '../Styling/Projects.scss'

// const ProjectCard = (props) => {
//   let { project } = props;
class ProjectCard extends Component {
  // let projectKeys = Object.keys(project)

  state = {
    loaded: false
  }

  render() {
    let keyValues
    if (this.props.project["type"] === "dev") {
      keyValues = <div className="dev-card">
        <div>
          {
            this.state.loaded
            ? null
            : <h1>LOADING...</h1>
          }
          <img
            src={this.props.project["img"]}
            alt="screenshot"
            crossOrigin=""
            onLoad={()=>{this.setState({loaded: true})}}
            style={this.state.loaded ? {} : {display: "none"}}
            />
        </div>
        <div className="project-info">
          <h2>{this.props.project["name"]}</h2>
          <a href={this.props.project["url"]}>VIEW</a>
        </div>
      </div>
    } else {
      keyValues = <div className="design-card">
        <div>
          {
            this.state.loaded
            ? null
            : <h1>LOADING...</h1>
          }
          <img
            src={this.props.project["img"]}
            alt="screenshot"
            crossOrigin=""
            onLoad={()=>{this.setState({loaded: true})}}
            style={this.state.loaded ? {} : {display: "none"}}
            />
        </div>
        <div className="project-info">
          <h2>{this.props.project["name"]}</h2>
        </div>
      </div>
    }

    return (
      <div className="portfolio-card">
        {keyValues}
      </div>
    )
  }
}

export default ProjectCard
