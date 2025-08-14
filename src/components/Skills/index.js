import { Component } from "react";
import "./index.css"; // Create this file for styling

class Skills extends Component {
  render() {
    const skillsData = [
      {
        category: "Frontend Development",
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "React.js",
          "Bootstrap",
          "Tailwind CSS",
        ],
      },
      {
        category: "Backend Development",
        skills: ["Node.js", "Express.js", "SQLite", "MongoDB", "REST APIs"],
      },
      {
        category: "Programming Languages",
        skills: ["C", "C++", "Python"],
      },
      {
        category: "Tools & Platforms",
        skills: ["Git & GitHub", "VS Code", "Cursor AI"],
      },
      {
        category: "Soft Skills",
        skills: [
          "Problem-Solving",
          "Team Collaboration",
          "Adaptability",
          "Time Management",
        ],
      },
    ];

    return (
      <section className="skills-section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Skills;
