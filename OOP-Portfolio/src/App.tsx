import React, { useState } from "react";
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
      <Navbar current={page} onNavigate={navigate} studentName={MY_NAME} />
      <main>{renderPage()}</main>
    </>
  );
};

export default App;
