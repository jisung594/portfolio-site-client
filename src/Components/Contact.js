import React from 'react';
import { Route } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <Route path='/contact' render={
        () => {
          return <div>
            <h1>CONTACT</h1>
            <h4>P: (978) 604-4087</h4>
            <h4>E: jonjichoi@gmail.com</h4>
          </div>
        }
      }/>
    </div>
  )
}

export default Contact;
