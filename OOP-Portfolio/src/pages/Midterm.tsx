import React, { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// MIDTERM PAGE
// Instructions: Replace all placeholder text below with your actual content.
// Each section maps to a requirement in your rubric.
// ─────────────────────────────────────────────────────────────────────────────

// ── 1. QUIZ DATA ─────────────────────────────────────────────────────────────
const quizzes = [
  {
    q: "What is Object-Oriented Programming?",
    a: "OOP is a programming paradigm that organizes software around objects — data structures that combine state (fields) and behavior (methods).",
    exp: "OOP makes large programs easier to manage and reuse through the four pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
  },
  {
    q: "What is the difference between a class and an object?",
    a: "A class is a blueprint or template; an object is a specific instance created from that class.",
    exp: "Think of a class as a cookie cutter and an object as the actual cookie. Multiple cookies (objects) can come from one cutter (class).",
  },
  {
    q: "What is encapsulation?",
    a: "Encapsulation is the practice of bundling data and methods that operate on that data within a single class, and restricting access using access modifiers.",
    exp: "Private fields with public getters/setters is a classic example. It protects the internal state of an object from outside interference.",
  },
  // ← Add more quiz items here
];

// ── 2. SEATWORK DATA ─────────────────────────────────────────────────────────
const seatworks = [
  {
    q: "Write a Java class called Circle with a radius field. Add a method to compute the area.",
    a: "Created a Circle class with a private double radius field. The getArea() method returns Math.PI * radius * radius.",
    exp: "Practiced encapsulation by keeping radius private and exposing behavior via a public method.",
  },
  {
    q: 'Explain the "this" keyword in Java.',
    a: '"this" refers to the current instance of the class. It is used to differentiate instance variables from local variables with the same name.',
    exp: "Common in constructors: this.name = name; allows the parameter name and the field name to coexist without ambiguity.",
  },
  // ← Add more seatwork items here
];

// ── 3. ACTIVITIES DATA ────────────────────────────────────────────────────────
const activities = [
  {
    title: "ATM Simulator",
    description:
      "Developed a console-based ATM program in Java that allows users to check their balance, deposit funds, and withdraw money. Applied encapsulation by keeping balance private and exposing operations through public methods.",
    learnings:
      "Learned how to design a class with meaningful state and behavior. Understood the importance of input validation (e.g., preventing negative withdrawals).",
    code: `public class ATM {
    private double balance;

    public ATM(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public double getBalance() { return balance; }
}`,
    filename: "ATM.java",
  },
  {
    title: "Decision Structures Program",
    description:
      "Built a Java program that uses if-else and switch statements to handle different user scenarios, such as grading, age categorization, and day-of-week labeling.",
    learnings:
      "Understood how to model real-world decision logic in code. Practiced nesting conditions and using switch-case for cleaner multi-branch logic.",
    code: `public class GradeClassifier {
    public static String classify(int score) {
        if (score >= 90) return "Excellent";
        else if (score >= 80) return "Very Good";
        else if (score >= 75) return "Good";
        else if (score >= 60) return "Needs Improvement";
        else return "Failed";
    }

    public static void main(String[] args) {
        System.out.println(classify(88)); // Very Good
    }
}`,
    filename: "GradeClassifier.java",
  },
  {
    title: "Methods & Parameters Activity",
    description:
      "Created a utility class with multiple static methods demonstrating how methods accept parameters, return values, and can be reused across a program.",
    learnings:
      "Gained a strong understanding of method signatures, return types, and the difference between void and value-returning methods.",
    code: `public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double average(int[] nums) {
        int sum = 0;
        for (int n : nums) sum += n;
        return (double) sum / nums.length;
    }

    public static boolean isEven(int n) {
        return n % 2 == 0;
    }
}`,
    filename: "MathUtils.java",
  },
  // ← Add more activities here
];

// ── 4. EXAM REFLECTION ───────────────────────────────────────────────────────
const examReflection = {
  summary:
    "The midterm exam covered Java syntax, class design, and OOP principles. I answered questions on encapsulation and wrote a short program demonstrating object instantiation and method calls.",
  reflection:
    "Going into the exam, I felt confident about encapsulation and constructors. I found some questions on method overloading tricky, which showed me I need more practice distinguishing overloading from overriding. Overall, the exam helped me see where my understanding is solid and where I still have gaps to fill before the final term.",
};

// ─────────────────────────────────────────────────────────────────────────────

type Tab = "quizzes" | "seatwork" | "activities" | "exam";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "quizzes", label: "Quizzes", icon: "📝" },
  { id: "seatwork", label: "Seatwork", icon: "✏️" },
  { id: "activities", label: "Activities", icon: "💻" },
  { id: "exam", label: "Midterm Exam", icon: "📄" },
];

const Midterm: React.FC = () => {
  const [active, setActive] = useState<Tab>("quizzes");
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="section-label">Term 1</p>
          <h1 className="section-title">Midterm Outputs</h1>
          <p className="section-sub">
            All quizzes, seatworks, activities, and exam content from the
            midterm period.
          </p>

          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              gap: 4,
              marginBottom: 36,
              background: "var(--bg-card)",
              borderRadius: "var(--radius)",
              padding: 6,
              border: "1px solid var(--border)",
            }}
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                style={{
                  flex: 1,
                  padding: "9px 12px",
                  background: active === t.id ? "var(--accent-glow)" : "none",
                  border:
                    active === t.id
                      ? "1px solid var(--accent)"
                      : "1px solid transparent",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color:
                    active === t.id ? "var(--accent-light)" : "var(--text-sec)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 14 }}>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>

          {/* ── QUIZZES ── */}
          {active === "quizzes" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <p className="section-label" style={{ marginBottom: 24 }}>
                {quizzes.length} Questions
              </p>
              {quizzes.map((item, i) => (
                <div className="qa-item" key={i}>
                  <p className="qa-q">
                    <span
                      style={{
                        color: "var(--accent)",
                        marginRight: 8,
                        fontFamily: "var(--font-code)",
                      }}
                    >
                      Q{i + 1}.
                    </span>
                    {item.q}
                  </p>
                  <p className="qa-a">
                    <strong
                      style={{
                        color: "var(--text)",
                        fontSize: 12,
                        marginRight: 6,
                      }}
                    >
                      A:
                    </strong>
                    {item.a}
                  </p>
                  <p className="qa-exp">💡 {item.exp}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── SEATWORK ── */}
          {active === "seatwork" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <p className="section-label" style={{ marginBottom: 24 }}>
                {seatworks.length} Items
              </p>
              {seatworks.map((item, i) => (
                <div className="qa-item" key={i}>
                  <p className="qa-q">
                    <span
                      style={{
                        color: "var(--cyan)",
                        marginRight: 8,
                        fontFamily: "var(--font-code)",
                      }}
                    >
                      #{i + 1}
                    </span>
                    {item.q}
                  </p>
                  <p className="qa-a">
                    <strong
                      style={{
                        color: "var(--text)",
                        fontSize: 12,
                        marginRight: 6,
                      }}
                    >
                      Answer:
                    </strong>
                    {item.a}
                  </p>
                  <p className="qa-exp">💡 {item.exp}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── ACTIVITIES ── */}
          {active === "activities" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {activities.map((act, i) => (
                <div className="card" key={i} style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-code)",
                          fontSize: 11,
                          color: "var(--accent-light)",
                          marginBottom: 6,
                        }}
                      >
                        Activity {i + 1}
                      </p>
                      <p className="card-title" style={{ fontSize: 17 }}>
                        {act.title}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      style={{
                        background: "var(--bg-card-2)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "6px 12px",
                        cursor: "pointer",
                        fontSize: 12,
                        color: "var(--text-sec)",
                        fontFamily: "var(--font-body)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {expanded === i ? "Hide Code ↑" : "View Code ↓"}
                    </button>
                  </div>

                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-sec)",
                      marginTop: 12,
                      lineHeight: 1.8,
                    }}
                  >
                    {act.description}
                  </p>

                  {expanded === i && (
                    <div
                      style={{ marginTop: 16, animation: "fadeIn 0.25s ease" }}
                    >
                      <div className="code-header">
                        <div className="code-dots">
                          <span />
                          <span />
                          <span />
                        </div>
                        <span>{act.filename}</span>
                      </div>
                      <div
                        className="code-block attached"
                        style={{ whiteSpace: "pre" }}
                      >
                        {act.code}
                      </div>
                    </div>
                  )}

                  <div
                    style={{
                      marginTop: 16,
                      padding: "12px 16px",
                      background: "var(--bg-card-2)",
                      borderRadius: 8,
                      borderLeft: "2px solid var(--cyan)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        color: "var(--cyan)",
                        marginBottom: 4,
                        fontFamily: "var(--font-code)",
                      }}
                    >
                      LEARNINGS
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--text-sec)",
                        lineHeight: 1.8,
                      }}
                    >
                      {act.learnings}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── EXAM ── */}
          {active === "exam" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <div className="card" style={{ marginBottom: 16 }}>
                <p className="section-label" style={{ marginBottom: 12 }}>
                  Exam Summary
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-sec)",
                    lineHeight: 1.8,
                  }}
                >
                  {examReflection.summary}
                </p>
              </div>

              <div className="reflection-card">
                <p className="section-label" style={{ marginBottom: 16 }}>
                  Reflection
                </p>
                <p className="reflection-text">{examReflection.reflection}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          Midterm Period &middot; Object-Oriented Programming
        </div>
      </footer>
    </div>
  );
};

export default Midterm;
