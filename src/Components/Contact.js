import React from 'react';
import { Route } from 'react-router-dom';
import '../Styling/Contact.scss'

const Contact = () => {
  return (
    <div>
      <Route path='/contact' render={
        () => {
          return <div className="contact">

            <div>
              <h1>CONTACT</h1>
            </div>

            <div className="contact-info">
              <div>
                <div className="primary-contact">
                  <h2>P:</h2>
                  <h4>(978) 604-4087</h4>
                  <h2>E:</h2>
                  <h4>jonjichoi@gmail.com</h4>
                </div>

                <div className="social-icons">
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
              </div>

              <div>
              </div>

            </div>
          </div>
        }
      }/>
    </div>
  )
}

export default Contact;
