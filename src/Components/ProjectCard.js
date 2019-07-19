import React from 'react';

const ProjectCard = (props) => {
  let { project } = props;

  return (
    <div>
      <h3>{project["name"]}</h3>
      <p>{project["url"]}</p>
    </div>
  )
}

export default ProjectCard
