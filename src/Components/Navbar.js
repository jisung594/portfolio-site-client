import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  // let {  } = props;

  return (
    <div>
      <Link to={'/'}><span>HOME</span></Link>
      <Link to={'/projects'}><span>WORK</span></Link>
      <Link to={'/about'}><span>ABOUT</span></Link>
      <Link to={'/contact'}><span>CONTACT</span></Link>
    </div>
  )
}

export default Navbar;
