import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import '../Styling/Projects.scss'
// import { Link } from 'react-router-dom';

// const PortfolioContainer = (props) => {
//   let { projects } = props;
class PortfolioContainer extends Component {
  state = {
    clicked: ""
  }

  clickHandler = (event) => {
    this.setState({
      clicked: event.target.id
    })
  }

  render () {
    let devProjectList
    if (this.props.projects["devProjects"].length > 0) {
      devProjectList = this.props.projects["devProjects"].map(projectObj => {
        return <ProjectCard project={projectObj} key={projectObj.id}/>
      })
    }

    let designProjectList
    if (this.props.projects["designProjects"].length > 0) {
      designProjectList = this.props.projects["designProjects"].map(projectObj => {
        return <ProjectCard project={projectObj} key={projectObj.id}/>
      })
    }

    return (
      <div id="portfolio-container">
        <div id="portfolio-type">
          <span id="dev" onClick={this.clickHandler} style={this.state.clicked === "dev" ? {color:"red"} : {color:"black"}}>DEV</span>
          <span id="design" onClick={this.clickHandler} style={this.state.clicked === "design" ? {color:"red"} : {color:"black"}}>DESIGN</span>
        </div>

        <div id="portfolio-list">
          {this.state.clicked === "design" ? designProjectList : devProjectList}
        </div>

        {/*<Switch>
          <Route path='/dev-projects' render={
             () => {
               return <div>
                   <h1>Dev Projects</h1>
                 <div>
                   {devProjectList}
                 </div>
               </div>
             }
           }/>

           <Route path='/design-projects' render={
             () => {
               return <div>
                  <h1>Design Projects</h1>
                <div>
                  {designProjectList}
                </div>
               </div>
             }
           }/>
         </Switch>*/}
       </div>
    )
  }
}

export default PortfolioContainer
