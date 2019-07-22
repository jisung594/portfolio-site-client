import React from 'react';
import { Link } from 'react-router-dom'
import '../Styling/Navbar.scss'

const Navbar = (props) => {
  // let {  } = props;

  return (
    <div className="navbar">
      <div className="navbar-options">
        <Link to={'/'}><label>HOME</label></Link>
        <Link to={'/work'}><label>WORK</label></Link>
        <Link to={'/about'}><label>ABOUT</label></Link>
        <Link to={'/contact'}><label>CONTACT</label></Link>
      </div>
    </div>
  )
}

export default Navbar;
