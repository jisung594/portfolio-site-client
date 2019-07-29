import React from 'react';
import '../Styling/Projects.scss'

const ProjectList = (props) => {
  let { project } = props;

  // let projectKeys = Object.keys(project)

  let keyValues
  if (project["type"] === "dev") {
    keyValues = <div className="dev-card">
      <img src={project["img"]} alt="screenshot" crossOrigin=""/>
      <div className="project-info">
        <h2>{project["name"]}</h2>
        <a href={project["url"]}>VIEW</a>
      </div>
    </div>
  } else {
    keyValues = <div className="design-card">
      <img src={project["img"]} alt="screenshot" crossOrigin=""/>
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
    <div id="portfolio-list" style={
      project["type"] === "dev" ? {display: "grid"}
      : {display: "grid", grid-template-columns: "30vw 30vw 30vw"}
    }>
      {keyValues}
      {/*downloadImage(project["img"])*/}
    </div>
  )
}

export default ProjectList
