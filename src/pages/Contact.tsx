import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const INFO = {
  email: "drivas.aillerr@email.com",
  facebook: "facebook.com/daveaillerr.rivas",
  github: "github.com/daveaillerr",
  school: "Polytechnic University of the Philippines",
};

const Contact: React.FC = () => {
  const [state, handleSubmit, reset] = useForm("mlgoanrd");

  return (
    <div className="page">
      <div hidden={!state.succeeded} className="modal-overlay">
        <div className="window-card">
          <p className="card-title" style={{ fontSize: 24 }}>
            Message sent!
          </p>
          <p className="card-body">
            Thanks for reaching out. I'll get back to you soon.
          </p>
          <button className="btn" style={{ marginTop: 24 }} onClick={reset}>
            Return
          </button>
        </div>
      </div>

      <section
        className="section"
        style={{
          filter: state.succeeded ? "blur(8px)" : "none",
          pointerEvents: state.succeeded ? "none" : "auto",
        }}
      >
        <div className="container-contacts">
          <div className="contact-grid">
            <div>
              <h1 className="section-title-contact">Get in Touch</h1>
              <p className="section-sub-contact">
                Let's build something great together.
              </p>

              <div
                className="contact-email"
                onClick={() => (window.location.href = `mailto:${INFO.email}`)}
              >
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="./src/assets/gmail.svg"
                      alt="gmail"
                      className="filter"
                    />
                  </div>
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">{INFO.email}</p>
                  </div>
                </div>
              </div>

              <div
                className="contact-github"
                onClick={() =>
                  (window.location.href = `https://${INFO.github}`)
                }
              >
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="./src/assets/github.svg"
                      alt="github"
                      className="filter"
                    />
                  </div>
                  <div>
                    <p className="contact-label">GitHub</p>
                    <p className="contact-value">{INFO.github}</p>
                  </div>
                </div>
              </div>

              <div
                className="contact-facebook"
                onClick={() =>
                  (window.location.href = `https://${INFO.facebook}`)
                }
              >
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="./src/assets/facebook.svg"
                      alt="facebook"
                      className="filter"
                    />
                  </div>
                  <div>
                    <p className="contact-label">Facebook</p>
                    <p className="contact-value">{INFO.facebook}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="card">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name here..."
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address..."
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Enter your message here..."
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  disabled={state.submitting}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          OOP E-Portfolio &middot; Built with React
        </div>
      </footer>
    </div>
  );
};

export default Contact;
