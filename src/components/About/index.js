import { Component } from "react";
import "./index.css";

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src="/my_image_2.jpg" alt="Om Prakash Behera" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I’m Om Prakash Behera — a Civil Engineering student with a
              strong passion for technology, problem-solving, and building
              impactful digital solutions. I enjoy working on MERN stack
              projects, exploring data structures and algorithms, and constantly
              learning new skills to stay ahead in the tech world.
            </p>
            <p>
              My mission is to combine engineering principles with modern
              software development to create innovative, efficient, and
              user-friendly applications. Outside of coding, I enjoy learning
              about infrastructure systems and how technology can make them
              smarter.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
