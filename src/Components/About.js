import React from 'react';
import '../Styling/About.scss'
// import { Route } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <h1>ABOUT</h1>

      <div className="bio">
        <div className="profile-image">
          <img src="https://i.imgur.com/HXVvwqJ.jpg" alt="profile"/>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>A frontend engineer with a strong backend skillset, finding joy in utilizing his design background to breathe visual life into his code. My previous work experience as a graphic designer has proven to be beneficial in this transition; the mindset of prioritizing the user remains constant. I’ve been exercising skills in both frontend and backend technologies, such as React/Redux and Ruby on Rails, to create a synergy between form and function. Cheers to gardening, 90’s sitcoms, and existential philosophy.</p>
        </div>
      </div>
      <div>
        <img id="resume" src="https://i.imgur.com/fhe1NEv.jpg" alt="resume"/>
      </div>
    </div>
  )
}

export default About;
