import "./Home.css";
import { Marquee } from "react-kino";

const STUDENT = {
  name: "Dave Aillerr Rivas",
  course: "Object-Oriented Programming",
  school: "Polytechnic University of the Philippines",
  section: "BSIT 2-3",
  year: "2025-2026",
};

const quickCards = [
  {
    title: "Java & OOP",
    body: "Built and documented Java programs covering classes, objects, inheritance, polymorphism, and encapsulation.",
  },
  {
    title: "Quizzes & Seatworks",
    body: "Answered and explained written assessments testing core OOP concepts and Java syntax.",
  },
  {
    title: "Activities & Projects",
    body: "Developed real-world mini-programs including an ATM simulator, decision-structure app, and method-based utilities.",
  },
  {
    title: "Reflections",
    body: "Documented insights, challenges, and learning milestones throughout the midterm and final terms.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">E-Portfolio &middot; {STUDENT.year}</p>
          <h1 className="hero-name">{STUDENT.name}</h1>
          <p className="hero-course">{STUDENT.school}</p>
          <p className="hero-section">{STUDENT.section}</p>

          <p className="hero-intro">
            This e-portfolio presents my Midterm and Final outputs in{" "}
            <strong>Object-Oriented Programming</strong> using Java. It includes
            quizzes, seatworks, activities, and exams that demonstrate my
            understanding of OOP concepts from classes and objects to
            encapsulation, inheritance, and polymorphism.
          </p>
        </div>
        <div className="badge-container">
          <Marquee speed={60} pauseOnHover={false} direction="right">
            <span className="badge">Java</span>
            <span className="badge-cyan badge">OOP</span>
            <span className="badge">Encapsulation</span>
            <span className="badge-cyan badge">Inheritance</span>
            <span className="badge">Polymorphism</span>
            <span className="badge">Abstraction</span>
            <span className="badge-cyan badge">Java</span>
            <span className="badge">OOP</span>
            <span className="badge-cyan badge">Encapsulation</span>
            <span className="badge">Inheritance</span>
            <span className="badge-cyan badge">Polymorphism</span>
            <span className="badge">Abstraction</span>
          </Marquee>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label-home">Overview</p>
          <h2 className="section-title-home">What's in this Portfolio</h2>
          <p className="section-sub-home">
            A structured showcase of academic outputs from the current school
            year.
          </p>

          <div className="card-grid">
            {quickCards.map((c) => (
              <div className="card" key={c.title}>
                <p className="card-title">{c.title}</p>
                <p className="card-body">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: 0 }}>
            <p className="card-title" style={{ marginBottom: 16 }}>
              Java Program Example
            </p>
            <div className="code-header">
              <div className="code-dots">
                <span />
                <span />
                <span />
              </div>
              <span>HelloWorld.java</span>
            </div>
            <div className="code-block attached">
              <span className="cm">
                // A simple Hello World program <br />
              </span>
              {"\n"}
              <span className="kw">public class </span>
              <span className="cls">HelloWorld </span>
              {"{"}
              <br />
              {"\n"}
              {"    "}
              <span className="kw">public static void </span>
              <span className="fn">main</span>(
              <span className="cls">String</span>[] args) {"{"}
              {"\n"}
              {"        "}
              <br />
              {"        "}
              <span className="cls">System</span>.out.<span className="fn">println</span>(
              <span className="st">"Hello, World!"</span>);{"\n"}
              {"    }"}
              {"\n"}
              {"}"}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          {STUDENT.name} &middot; {STUDENT.course} &middot; {STUDENT.year}
        </div>
      </footer>
    </div>
  );
}
