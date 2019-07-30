import React, { Component } from 'react';
import ProjectList from './ProjectList';
import '../Styling/Projects.scss'
// import { Link } from 'react-router-dom';

class PortfolioContainer extends Component {
  state = {
    clicked: "dev"
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
        return <ProjectList project={projectObj} key={projectObj.id}/>
      })
    }

    let designProjectList
    if (this.props.projects["designProjects"].length > 0) {
      designProjectList = this.props.projects["designProjects"].map(projectObj => {
        return <ProjectList project={projectObj} key={projectObj.id}/>
      })
    }

    return (
      <div id="portfolio-page">
        <div id="portfolio-type">
          <span id="dev" onClick={this.clickHandler} style={this.state.clicked === "dev" ? {color:"#E8175D"} : {color:"#474747"}}>DEV</span>
          <span>|</span>
          <span id="design" onClick={this.clickHandler} style={this.state.clicked === "design" ? {color:"#E8175D"} : {color:"#474747"}}>DESIGN</span>
        </div>

        <div className="portfolio-container" style={
          this.state.clicked === "dev" ? null : {"grid-template-columns": "30vw 30vw 30vw", "margin": "5vw"}}>
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
