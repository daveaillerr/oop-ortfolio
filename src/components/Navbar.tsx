import React, { useState } from "react";
import "./Navbar.css";

type Page = "home" | "midterm" | "final" | "contact";

interface NavbarProps {
  current: Page;
  onNavigate: (page: Page) => void;
  studentName?: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const links: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Midterm", page: "midterm" },
  { label: "Final", page: "final" },
  { label: "Contact", page: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({
  current,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span style={{ marginLeft: 10 }}>OOP</span>
        </div>

        {/* Desktop links */}
        <div className="navbar-links">
          {links.map(({ label, page }) => (
            <button
              key={page}
              className={`nav-btn ${current === page ? "active" : ""}`}
              onClick={() => handleNavigate(page)}
            >
              {label}
            </button>
          ))}
          <button
            className="nav-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile right controls */}
        <div className="navbar-mobile-right">
          <button
            className="nav-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`ham-bar ${menuOpen ? "open" : ""}`} />
            <span className={`ham-bar ${menuOpen ? "open" : ""}`} />
            <span className={`ham-bar ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? "visible" : ""}`}>
        {links.map(({ label, page }) => (
          <button
            key={page}
            className={`mobile-nav-btn ${current === page ? "active" : ""}`}
            onClick={() => handleNavigate(page)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
