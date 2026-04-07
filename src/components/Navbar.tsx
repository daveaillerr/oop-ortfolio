import React from "react";
import "./Navbar.css";

type Page = "home" | "midterm" | "final" | "contact";

interface NavbarProps {
  current: Page;
  onNavigate: (page: Page) => void;
  studentName?: string;
}

const links: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Midterm", page: "midterm" },
  { label: "Final", page: "final" },
  { label: "Contact", page: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ current, onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span style={{ marginLeft: 10 }}>OOP Portfolio</span>
        </div>

        <div className="navbar-links">
          {links.map(({ label, page }) => (
            <button
              key={page}
              className={`nav-btn ${current === page ? "active" : ""}`}
              onClick={() => onNavigate(page)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
