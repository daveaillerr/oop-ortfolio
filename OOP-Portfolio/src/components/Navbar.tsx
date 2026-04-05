import React from "react";

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

const Navbar: React.FC<NavbarProps> = ({
  current,
  onNavigate,
  studentName = "Student",
}) => {
  const initials = studentName
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .join("");

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo / name badge */}
        <div className="navbar-logo">
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          {initials}
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
          <span style={{ marginLeft: 8 }}>OOP Portfolio</span>
        </div>

        {/* Nav links */}
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
