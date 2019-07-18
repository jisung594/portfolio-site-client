import React from 'react';

const ProjectCard = (props) => {
  let { project } = props;

  return (
    <div>
      <h1>{project["name"]}</h1>
      <h3>{project["url"]}</h3>
    </div>
  )
}

export default ProjectCard
