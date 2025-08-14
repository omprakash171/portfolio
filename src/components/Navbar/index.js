import React, { Component } from "react";
import "./index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    return (
      <nav className="navbar">
        <div className="logo">O.</div>

        {/* Navigation Links */}
        <ul className={`nav-links ${this.state.menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={this.toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={this.toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={this.toggleMenu}>Projects</a></li>
          <li><a href="#skills" onClick={this.toggleMenu}>Skills</a></li>
          <li><a href="#learnings" onClick={this.toggleMenu}>Learning</a></li>
          <li><a href="#blog" onClick={this.toggleMenu}>Blog</a></li>
          <li><a href="#contact" onClick={this.toggleMenu}>Contact</a></li>
          <button id="toggle-theme">🌓</button>
        </ul>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={this.toggleMenu}>
          &#9776;
        </div>
      </nav>
    );
  }
}

export default Navbar;
