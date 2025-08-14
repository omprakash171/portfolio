import { Component } from "react";
import "./index.css"; // Create this CSS file

class Contact extends Component {
  render() {
    return (
      <section className="contact-section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          Have a project in mind or just want to say hello? Fill out the form
          below and I’ll get back to you as soon as possible.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
