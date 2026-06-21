import { NavLink } from "react-router-dom";
import "../../styles/components.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <span>// got a build in mind?</span>
        <NavLink to="/contact" className="footer__cta-link">
          start a project →
        </NavLink>
      </div>

      <div className="footer__row">
        <span className="footer__brand">devoct_</span>
        <nav className="footer__links">
          <NavLink to="/services">services</NavLink>
          <NavLink to="/work">work</NavLink>
          <NavLink to="/process">process</NavLink>
          <NavLink to="/about">about</NavLink>
        </nav>
        <span className="footer__meta">
          © {new Date().getFullYear()} devoct
        </span>
      </div>
    </footer>
  );
}
