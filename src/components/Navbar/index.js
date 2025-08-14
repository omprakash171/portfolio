import { Component } from "react";

import "./index.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">O</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#projects">Skills</a>
          </li>
          <li>
            <a href="#projects">Learning</a>
          </li>
          <li>
            <a href="#projects">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button id="toggle-theme">🌓</button>
        </ul>
        <div class="menu-toggle">&#9776;</div>
      </nav>
    );
  }
}

export default Navbar;
