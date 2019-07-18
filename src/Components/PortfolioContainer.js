import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const PortfolioContainer = (props) => {
  let { projects } = props;

  let projectList
  if (projects.length > 0) {
    projectList = projects.map(projectObj => {
      return <ProjectCard project={projectObj} key={projectObj.id}/>
    })
  }

  return (
    <div>
      <Switch>
        <Route path='/projects' render={
           () => {
             return <div>
                 <h1>(type of) Projects</h1>
               <div>
                 {projectList}
               </div>
             </div>
           }
         }/>
       </Switch>
     </div>
  )
}

export default PortfolioContainer
