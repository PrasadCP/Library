import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { EventBanner } from "./components/EventBanner";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "about") return <AboutPage />;
    if (currentPage === "contact") return <ContactPage />;
    return <HomePage />;
  };

  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <EventBanner />
      {renderPage()}
      <footer className="footer">
        <p>© 2026 പതിയാർ ഗ്രന്ഥാലയം. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
