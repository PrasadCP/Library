function Navbar({ currentPage, onNavigate }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="section-card nav-bar">
      <div className="nav-brand">
        <strong className="nav-title">പതിയാർ ഗ്രന്ഥാലയം</strong>
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            className={`nav-link${currentPage === link.id ? " active" : ""}`}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export { Navbar };
