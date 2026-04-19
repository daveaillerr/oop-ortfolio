import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Midterm from "./pages/Midterm";
import Final from "./pages/Final";
import Contact from "./pages/Contact";

type Page = "home" | "midterm" | "final" | "contact";

const MY_NAME = "Dave Aillerr Rivas";

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const pref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved || pref;
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "midterm":
        return <Midterm />;
      case "final":
        return <Final />;
      case "contact":
        return <Contact />;
    }
  };

  return (
    <>
      <Navbar current={page} onNavigate={navigate} studentName={MY_NAME} theme={theme} onToggleTheme={toggleTheme} />
      <main>{renderPage()}</main>
    </>
  );
};

export default App;
