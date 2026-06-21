import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { SceneProvider } from "./context/SceneContext.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import PageTransition from "./components/layout/PageTransition.jsx";
import CursorTrail from "./components/overlays/CursorTrail.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import Process from "./pages/Process.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Scrolls to top on every route change — without this, navigating from the
// bottom of a long page (e.g. Work) to a new route keeps the old scroll position.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <SceneProvider>
      <CursorTrail />
      <ScrollToTop />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
    </SceneProvider>
  );
}
