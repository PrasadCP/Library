import React from "react";

function Navbar({ currentPage, onNavigate }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return React.createElement(
    "nav",
    { className: "section-card nav-bar" },
    React.createElement(
      "div",
      { className: "nav-brand" },
      React.createElement("strong", null, "Pathiyaar Library"),
    ),
    React.createElement(
      "div",
      { className: "nav-links" },
      links.map((link) =>
        React.createElement(
          "button",
          {
            key: link.id,
            className: `nav-link${currentPage === link.id ? " active" : ""}`,
            onClick: () => onNavigate(link.id),
            type: "button",
          },
          link.label,
        ),
      ),
    ),
  );
}

export { Navbar };
