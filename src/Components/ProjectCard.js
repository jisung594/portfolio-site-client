import React from 'react';

const ProjectCard = (props) => {
  let { project } = props;

  return (
    <div>
      <h1>{project["name"]}</h1>
      <h1>{project["url"]}</h1>
    </div>
  )
}

export default ProjectCard
