import React, { Component } from 'react';
import '../Styling/Homepage.scss'
// import { Route } from 'react-router-dom'

// const Homepage = () => {
class Homepage extends Component {
  // componentDidMount() {
  //   setTimeout(this.typingEffect, 10000)
  // }
  //
  // typingEffect = () => {
  //   let i = 0
  //   let text = "Hi"
  //   let speed = 500
  //
  //   if (i < text.length) {
  //     document.querySelector('#hi').innerText += text.charAt(i)
  //     i++
  //     setTimeout(typingEffect, speed)
  //   }
  // }

  render () {
    return (
      <div className="intro">
        <h1>Hi.</h1>

        <h1>I'm <span>Jonathan</span>,</h1>
        <h1>a frontend</h1>
        <h1>engineer.</h1>

        <br/>

        <h4>Welcome to my (work in progress) portfolio.</h4>
        <h4>Thanks for coming.</h4>


      </div>
    )
  }
}


export default Homepage
