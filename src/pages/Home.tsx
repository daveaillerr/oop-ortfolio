import React from "react";
import "./Home.css";
import "../index.css";

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

const Home: React.FC = () => (
  <div className="page">
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">E-Portfolio &middot; {STUDENT.year}</p>
        <h1 className="hero-name">{STUDENT.name}</h1>
        <p className="hero-course">
          {STUDENT.course} &nbsp;&bull;&nbsp; {STUDENT.school}
        </p>
        <p className="hero-section">{STUDENT.section}</p>

        <div className="hero-divider" />

        <p className="hero-intro">
          This e-portfolio presents my Midterm and Final outputs in{" "}
          <strong style={{ color: "var(--accent-light)" }}>
            Object-Oriented Programming
          </strong>{" "}
          using Java. It includes quizzes, seatworks, activities, and exams that
          demonstrate my understanding of OOP concepts — from basic classes and
          objects to encapsulation, inheritance, and polymorphism.
        </p>

        <div className="badge-container">
          <span className="badge">Java</span>
          <span className="badge">OOP</span>
          <span className="badge">Encapsulation</span>
          <span className="badge">Inheritance</span>
          <span className="badge-cyan badge">Polymorphism</span>
          <span className="badge-cyan badge">Abstraction</span>
        </div>
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
            A quick taste — Java OOP
          </p>
          <div className="code-header">
            <div className="code-dots">
              <span />
              <span />
              <span />
            </div>
            <span>HelloOOP.java</span>
          </div>
          <div className="code-block attached">
            <span className="cm">
              // OOP in action: class definition + instantiation
            </span>
            {"\n"}
            <span className="kw">public class </span>
            <span className="cls">BankAccount </span>
            {"{"}
            {"\n"}
            {"    "}
            <span className="kw">private </span>
            <span className="cls">String </span>owner;{"\n"}
            {"    "}
            <span className="kw">private double </span>balance;{"\n\n"}
            {"    "}
            <span className="cm">// Constructor</span>
            {"\n"}
            {"    "}
            <span className="kw">public </span>
            <span className="fn">BankAccount</span>(
            <span className="cls">String </span>owner,{" "}
            <span className="kw">double </span>initialBalance) {"{"}
            {"\n"}
            {"        "}
            <span className="kw">this</span>.owner = owner;{"\n"}
            {"        "}
            <span className="kw">this</span>.balance = initialBalance;{"\n"}
            {"    }"}
            {"\n\n"}
            {"    "}
            <span className="kw">public void </span>
            <span className="fn">deposit</span>(
            <span className="kw">double </span>amount) {"{"}
            {"\n"}
            {"        "}balance += amount;{"\n"}
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

export default Home;
