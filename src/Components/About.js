import React from 'react';
import '../Styling/About.scss'
// import { Route } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <h1>ABOUT</h1>
      <div className="bio">
        <p>A full-stack web developer, finding joy in utilizing his design background to breathe visual life into his code. My previous work experience as a graphic designer has proven to be beneficial in this transition; the mindset of prioritizing the user remains constant. I’ve been exercising skills in both frontend and backend technologies, such as React/Redux and Ruby on Rails, to create a synergy between form and function. Cheers to gardening, 90’s sitcoms, and existential philosophy.</p>
      </div>

      <div className="skills">
        <div className="technologies-column">
          <h4>Skills/Technologies</h4>
          <ul>Javascript</ul>
          <ul>React</ul>
          <ul>Redux</ul>
          <ul>Ruby</ul>
          <ul>Ruby on Rails</ul>
          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>SASS/SCSS</ul>
          <ul>Git</ul>
          <ul>Github</ul>
          <ul>SQL</ul>
          <ul>PostgreSQL</ul>
          <ul>REST API</ul>
          <ul>OO Programming</ul>
          <ul>Node.js</ul>
          <ul>Express.js</ul>
        </div>

        <div className="tools-column">
          <h4>Design Tools</h4>
          <ul>Adobe Photoshop</ul>
          <ul>Adobe Illustrator</ul>
          <ul>Adobe Indesign</ul>
          <ul>Adobe AfterEffects</ul>
          <ul>Sketch</ul>
          <ul>InVision</ul>
        </div>
      </div>
    </div>
  )
}

export default About;
