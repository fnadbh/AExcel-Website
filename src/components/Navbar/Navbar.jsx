import "./Navbar.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import SideMenu from "../SideMenu/SideMenu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Check if current page is Home
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`navbar ${
          !isHome || scrolled ? "scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          <div className="navbar-logo">

    <img
        src="/images/logo.jpeg"
        className="aexcel-logo"
    />

    <img
        src="/images/icats-logo.png"
        className="icats-logo"
    />

</div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>
      </header>

      <SideMenu
        open={menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;