import React from 'react';
import { Route } from 'react-router-dom';
import '../Styling/Contact.scss'

const Contact = () => {
  return (
    <div>
      <Route path='/contact' render={
        () => {
          return <div className="contact">
            <h1>CONTACT</h1>
            <h4><span>P:</span> (978) 604-4087</h4><br/>
            <h4><span>E:</span> jonjichoi@gmail.com</h4><br/>


            <a href="https://www.linkedin.com/in/jonathanchoi594/">
              <img src="https://i.imgur.com/X6Gvwc1.png" alt="linkedin"/>
            </a>
            <a href="https://github.com/jisung594">
              <img src="https://i.imgur.com/xKkPyGv.png" alt="github"/>
            </a>
            <a href="https://medium.com/@jisung594">
              <img src="https://i.imgur.com/PeuZq4q.png" alt="blog"/>
            </a>
          </div>
        }
      }/>
    </div>
  )
}

export default Contact;
