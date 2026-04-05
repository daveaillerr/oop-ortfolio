import React, { useState } from "react";

// ── Fill in your contact details ─────────────────────────────────────────────
const INFO = {
  email: "yourname@email.com", // ← replace
  facebook: "facebook.com/yourname", // ← replace (or remove)
  github: "github.com/yourname", // ← replace (or remove)
  school: "Your School Name", // ← replace
  section: "BSCS 2-A", // ← replace
};
// ────────────────────────────────────────────────────────────────────────────

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real deployment, hook this up to EmailJS or Formspree
    // e.g. fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form) })
    setSent(true);
  };

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="section-label">Get in Touch</p>
          <h1 className="section-title">Contact</h1>
          <p className="section-sub">
            Reach out for questions, feedback, or collaboration.
          </p>

          <div className="contact-grid">
            {/* Left: contact info */}
            <div>
              <div className="contact-item">
                <div className="contact-icon-wrap">✉️</div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">
                    <a href={`mailto:${INFO.email}`}>{INFO.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">🌐</div>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">
                    <a
                      href={`https://${INFO.github}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {INFO.github}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">📘</div>
                <div>
                  <p className="contact-label">Facebook</p>
                  <p className="contact-value">
                    <a
                      href={`https://${INFO.facebook}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {INFO.facebook}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">🎓</div>
                <div>
                  <p className="contact-label">School &amp; Section</p>
                  <p className="contact-value">{INFO.school}</p>
                  <p
                    className="contact-value"
                    style={{ fontSize: 12, color: "var(--text-muted)" }}
                  >
                    {INFO.section}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: message form */}
            <div>
              {sent ? (
                <div
                  className="card"
                  style={{ textAlign: "center", padding: 40 }}
                >
                  <p style={{ fontSize: 36, marginBottom: 12 }}>✅</p>
                  <p className="card-title">Message sent!</p>
                  <p className="card-body">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    className="btn"
                    style={{ marginTop: 20 }}
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <div className="card">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Juan dela Cruz"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="juan@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn"
                    onClick={handleSubmit}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Send Message
                  </button>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      marginTop: 12,
                      textAlign: "center",
                    }}
                  >
                    Tip: connect this form to{" "}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "var(--accent-light)" }}
                    >
                      Formspree
                    </a>{" "}
                    or EmailJS for real submissions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          OOP E-Portfolio &middot; Built with React + TypeScript
        </div>
      </footer>
    </div>
  );
};

export default Contact;
