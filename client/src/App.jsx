import { Routes, Route, NavLink } from "react-router-dom";

/* ──────────────────────────────────────────────
   TEMPORARY inline stand-ins.
   These get replaced 1:1 by their real files as we build:
     <NavPlaceholder />   →  components/layout/Navbar.jsx
     <FooterPlaceholder /> → components/layout/Footer.jsx
     <Placeholder name="Home" /> → pages/Home.jsx, etc.
   Keeping the route map real now so nothing has to be
   rewired later — only the contents behind each route change.
   ────────────────────────────────────────────── */

const NAV_LINKS = [
  { to: "/", label: "home" },
  { to: "/services", label: "services" },
  { to: "/work", label: "work" },
  { to: "/process", label: "process" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
];

function NavPlaceholder() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem var(--gutter)",
        borderBottom: "1px solid var(--signal-dim)",
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-eyebrow)",
      }}
    >
      <span style={{ color: "var(--signal)" }}>devoct_</span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) => ({
              color: isActive ? "var(--signal)" : "var(--ink-dim)",
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

function FooterPlaceholder() {
  return (
    <footer
      style={{
        padding: "2rem var(--gutter)",
        borderTop: "1px solid var(--signal-dim)",
        color: "var(--ink-dim)",
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-eyebrow)",
      }}
    >
      © {new Date().getFullYear()} devoct — built, not generated.
    </footer>
  );
}

function Placeholder({ name }) {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        color: "var(--ink-dim)",
      }}
    >
      {"// "}
      {name} page — next up
    </main>
  );
}

export default function App() {
  return (
    <>
      <NavPlaceholder />
      <Routes>
        <Route path="/" element={<Placeholder name="Home" />} />
        <Route path="/services" element={<Placeholder name="Services" />} />
        <Route path="/work" element={<Placeholder name="Work" />} />
        <Route path="/process" element={<Placeholder name="Process" />} />
        <Route path="/about" element={<Placeholder name="About" />} />
        <Route path="/contact" element={<Placeholder name="Contact" />} />
      </Routes>
      <FooterPlaceholder />
    </>
  );
}
