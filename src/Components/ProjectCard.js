import React from 'react';

const ProjectCard = (props) => {
  let { project } = props;

  // let projectKeys = Object.keys(project)

  let keyValues
  if (project["type"] === "dev") {
    keyValues = <div>
      <h2>{project["name"]}</h2>
      <a href={project["url"]}>VIEW</a>
    </div>
  } else {
    keyValues = <div>
      <h2>{project["name"]}</h2>
      <h5>{project["img"]}</h5>
    </div>
  }

  return (
    <div>
      {keyValues}
    </div>
  )
}

export default ProjectCard
