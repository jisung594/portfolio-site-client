import React from 'react';
import { Link } from 'react-router-dom'
import '../Styling/Navbar.scss'

const Navbar = (props) => {
  // let {  } = props;

  return (
    <div className="navbar">
      <Link to={'/'}><span>HOME</span></Link>
      <Link to={'/work'}><span>WORK</span></Link>
      <Link to={'/about'}><span>ABOUT</span></Link>
      <Link to={'/contact'}><span>CONTACT</span></Link>
    </div>
  )
}

export default Navbar;
