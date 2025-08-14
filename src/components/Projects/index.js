import { Component } from "react";
import "./index.css";

class Projects extends Component {
  render() {
    const projects = [
      {
        title: "Portfolio Website",
        link: "#",
        description: "A personal website showcasing my skills, projects, and achievements with a clean, responsive design.",
        points: [
          "Built with React.js and responsive CSS for seamless mobile and desktop experience.",
          "Includes hero section, about, projects, and contact form.",
        ],
        tech: "React, HTML, CSS, JS"
      },
      {
        title: "MERN Blog App",
        link: "#",
        description: "A full-stack blogging platform allowing users to create, edit, and view posts.",
        points: [
          "Authentication and authorization implemented using JWT.",
          "MongoDB for data storage with Node.js and Express for backend APIs."
        ],
        tech: "MongoDB, Express, React, Node.js, CSS"
      },
      {
        title: "Todos Application",
        link: "https://omtodoapp7.ccbp.tech",
        description: "A comprehensive todo management tool designed to enhance productivity.",
        points: [
          "User-friendly interface with HTML, CSS, and Bootstrap for ease of use.",
          "Effortless task management with JavaScript-based CRUD operations and dynamic UI updates.",
          "Local storage methods to ensure task persistence."
        ],
        tech: "HTML, CSS, JS, Bootstrap"
      },
      {
        title: "Wikipedia Search Application",
        link: "https://omsearch.ccbp.tech",
        description: "Custom Wikipedia search where users can view curated results and open detailed Wikipedia pages.",
        points: [
          "Displayed results using HTML lists styled with CSS and Bootstrap, responsive with Flexbox.",
          "Fetched search results asynchronously using Fetch API and opened links in new tabs."
        ],
        tech: "HTML, CSS, JS, REST API Calls, Bootstrap"
      },
      {
        title: "Typing Speed Test",
        link: "https://typingtest17.ccbp.tech",
        description: "Typing speed assessment tool with real-time accuracy tracking.",
        points: [
          "JavaScript used to fetch and display paragraph text and track timer.",
          "Real-time results and validation to ensure accuracy and completeness."
        ],
        tech: "HTML, CSS, JS, REST API Calls, Bootstrap"
      }
    ];

    return (
      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="tech-used"><strong>Technologies used:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
