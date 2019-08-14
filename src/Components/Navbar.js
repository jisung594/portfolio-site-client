import React from 'react';
import { Link } from 'react-router-dom'
import '../Styling/Navbar.scss'

const Navbar = (props) => {
  // let {  } = props;

  return (
    <div className="navbar">
      <div className="navbar-options">
        <Link className="link" to={'/'}><label>HOME</label></Link>
        <Link className="link" to={'/work'}><label>WORK</label></Link>
        <Link className="link" to={'/about'}><label>ABOUT</label></Link>
        <Link className="link" to={'/contact'}><label>CONTACT</label></Link>
      </div>
    </div>
  )
}

export default Navbar;
