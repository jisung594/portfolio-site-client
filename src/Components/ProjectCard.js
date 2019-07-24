import React from 'react';
import '../Styling/Projects.scss'

const ProjectCard = (props) => {
  let { project } = props;

  // let projectKeys = Object.keys(project)

  let keyValues
  if (project["type"] === "dev") {
    keyValues = <div className="card-container">
      <img src={project["img"]} alt="screenshot" crossOrigin=""/>
      <div className="project-info">
        <h2>{project["name"]}</h2>
        <a href={project["url"]}>VIEW</a>
      </div>
    </div>
  } else {
    keyValues = <div className="card-container">
      <h2>{project["name"]}</h2>
      <h5>{project["img"]}</h5>
    </div>
  }

  // let downloadImage = (url) => {
  //   let image = new Image()
  //   image.crossOrigin = "Anonymous"
  //   image.src = url
  // }

  return (
    <div id="portfolio-list">
      {keyValues}
      {/*downloadImage(project["img"])*/}
    </div>
  )
}

export default ProjectCard
