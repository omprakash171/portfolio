import { Component } from "react";
import "./index.css";

class Hero extends Component {
  render() {
    return (
      <header className="hero">
        <img src="/my_image.jpg" alt="Om Prakash Behera" className="hero-img" />
        <h1 className="hero-title">Hi, I’m Om Prakash Behera</h1>
        <p className="subtitle">
          Civil Engineering Student | MERN Stack Developer 🚀 | DSA Explorer
        </p>
      </header>
    );
  }
}

export default Hero;
