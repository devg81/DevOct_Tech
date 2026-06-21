import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components.css";

const NAV_LINKS = [
  { to: "/", label: "home" },
  { to: "/services", label: "services" },
  { to: "/work", label: "work" },
  { to: "/process", label: "process" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        devoct_
      </NavLink>

      <nav className="navbar__links navbar__links--desktop">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `navbar__link${isActive ? " navbar__link--active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="navbar__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? "close" : "menu"}
      </button>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
