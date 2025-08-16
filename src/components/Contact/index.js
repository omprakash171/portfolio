import { Component } from "react";
import "./index.css"; // Create this CSS file
import Swal from "sweetalert2";

class Contact extends Component {
  onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fe5a06b9-d61f-4b8d-968e-4879db074e5c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  render() {
    return (
      <section className="contact-section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          Have a project in mind or just want to say hello? Fill out the form
          below and I’ll get back to you as soon as possible.
        </p>
        <form className="contact-form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" name="name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows="5"
              name="message"
              required
            ></textarea>
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
