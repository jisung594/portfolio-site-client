import React, { Component } from 'react';
import '../Styling/Projects.scss'


class ProjectCard extends Component {
  state = {
    loaded: false
  }

  render() {
    let keyValues
    if (this.props.project["type"] === "dev" || this.props.project["type"] === "wip") {
      keyValues = <div className="dev-card"
        onMouseEnter={() => this.props.imgHoverHandler(this.props.project)}
        onMouseLeave={() => this.props.imgHoverHandler({})}
      >
          {
            this.state.loaded
            ? null
            : <div className='loading-wheel'></div>
          }
          {
            this.props.hoveredProject.name
            ? <div className="project-info">
                <h2>{this.props.hoveredProject["name"]}</h2>
                <h5>{this.props.hoveredProject["stack"]}</h5>
                <a href={this.props.hoveredProject["url"]}>VIEW</a>
              </div>
            : null
          }

          <div>
            <img
              src={this.props.project["img"]}
              alt="screenshot"
              crossOrigin=""
              onLoad={()=>{this.setState({loaded: true})}}
              style={
                this.state.loaded
                ? {}
                : {display: "none"},
                this.props.imgWasHovered && this.props.project.name === this.props.hoveredProject.name
                ? {opacity: "20%"}
                : {opacity: "100%"}
              }
            />
          </div>
      </div>
    } else {
      keyValues = <div className="design-card">
        {
          this.state.loaded
          ? null
          : <div className='loading-wheel'></div>
        }

        <img
          src={this.props.project["img"]}
          alt="screenshot"
          crossOrigin=""
          style={this.state.loaded ? {} : {display: "none"}}
          onLoad={()=>{this.setState({loaded: true})}}
          onClick={() => this.props.imgClickHandler(this.props.project)}
        />
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
