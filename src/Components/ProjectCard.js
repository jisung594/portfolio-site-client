import React from 'react';
import '../Styling/Projects.scss'

const ProjectCard = (props) => {
  let { project } = props;

  // let projectKeys = Object.keys(project)

  let keyValues
  if (project["type"] === "dev") {
    keyValues = <div className="card-container">
      <h2>{project["name"]}</h2>
      <img src={project["img"]} alt="screenshot" crossOrigin=""/>
      <a href={project["url"]}>VIEW</a>
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
    <div>
      {keyValues}
      {/*downloadImage(project["img"])*/}
    </div>
  )
}

export default ProjectCard
