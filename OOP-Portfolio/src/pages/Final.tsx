// ─────────────────────────────────────────────────────────────────────────────
// Final.tsx — Placeholder for Final Term outputs
// Structure mirrors Midterm.tsx — duplicate and fill in when finals arrive.
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

const Final: React.FC = () => (
  <div className="page">
    <div className="container">
      <div className="coming-soon">
        <div className="coming-soon-icon">🚧</div>
        <h2>Final Term — Coming Soon</h2>
        <p>
          This section will be updated with Final quizzes, seatworks,
          activities, and exam outputs at the end of the term.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span className="badge">Inheritance</span>
          <span className="badge">Polymorphism</span>
          <span className="badge">Interfaces</span>
          <span className="badge-cyan badge">Abstract Classes</span>
          <span className="badge-cyan badge">Exception Handling</span>
        </div>
      </div>
    </div>
  </div>
);

export default Final;
