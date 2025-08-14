import { Component } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://github.com/omprakash171" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/om-prakash-behera/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/OmPrakash633536" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/birana_17/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:bomprakash485@gmail.com" >
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Om Prakash Behera | All Rights Reserved</p>
      </footer>
    );
  }
}

export default Footer;
