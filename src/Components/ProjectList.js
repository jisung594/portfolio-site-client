import React from 'react';
import '../Styling/Projects.scss'

const ProjectList = (props) => {
  let { project } = props;

  // let projectKeys = Object.keys(project)

  let keyValues
  if (project["type"] === "dev") {
    keyValues = <div className="dev-card">
      <div>
        <img src={project["img"]} alt="screenshot" crossOrigin=""/>
      </div>
      <div className="project-info">
        <h2>{project["name"]}</h2>
        <a href={project["url"]}>VIEW</a>
      </div>
    </div>
  } else {
    keyValues = <div className="design-card">
      <div>
        <img src={project["img"]} alt="screenshot" crossOrigin=""/>
      </div>
      <div className="project-info">
        <h2>{project["name"]}</h2>
      </div>
    </div>
  }

  // let downloadImage = (url) => {
  //   let image = new Image()
  //   image.crossOrigin = "Anonymous"
  //   image.src = url
  // }

  return (
    <div className="portfolio-list">
      {keyValues}
      {/*downloadImage(project["img"])*/}
    </div>
  )
}

export default ProjectList
