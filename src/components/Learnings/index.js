import { Component } from "react";
import "./index.css"; // Create this file for styling

class Learnings extends Component {
  render() {
    const learningsData = [
      {
        title: "Frontend Development",
        details: [
          "Mastered HTML5, CSS3, and modern JavaScript",
          "Built responsive layouts with Flexbox & Grid",
          "Learned React.js for building dynamic UIs",
        ],
      },
      {
        title: "Backend Development",
        details: [
          "Worked with Node.js & Express.js",
          "Integrated MongoDB for database management",
          "Implemented REST APIs for data handling",
        ],
      },
      {
        title: "Data Structures & Algorithms",
        details: [
          "Solved 200+ problems on arrays, strings, recursion",
          "Learned time & space complexity analysis",
          "Applied DSA in real-world coding challenges",
        ],
      },
      {
        title: "Version Control & Tools",
        details: [
          "Used Git & GitHub for code management",
          "Deployed projects using Netlify & Vercel",
          "Debugged APIs with Postman",
        ],
      },
    ];

    return (
      <section className="learnings-section" id="learnings">
        <h2 className="section-title">My Learnings</h2>
        <div className="learnings-container">
          {learningsData.map((item, index) => (
            <div key={index} className="learning-card">
              <h3>{item.title}</h3>
              <ul>
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Learnings;
