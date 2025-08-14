import { Component } from "react";
import "./index.css"; // Create this file for styling

class Blog extends Component {
  render() {
    const blogPosts = [
      {
        title: "How I Built My First React App",
        date: "July 20, 2025",
        description:
          "A step-by-step guide to how I created my first React project, covering setup, component design, and deployment.",
        link: "#"
      },
      {
        title: "Mastering JavaScript ES6 Features",
        date: "August 2, 2025",
        description:
          "From arrow functions to destructuring, I share the most powerful ES6 features that changed the way I code.",
        link: "#"
      },
      {
        title: "The Power of Git & GitHub",
        date: "August 10, 2025",
        description:
          "Why version control is essential for every developer, and how I manage my projects with Git & GitHub.",
        link: "#"
      }
    ];

    return (
      <section className="blog-section" id="blog">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <h3>{post.title}</h3>
              <span className="blog-date">{post.date}</span>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Blog;
