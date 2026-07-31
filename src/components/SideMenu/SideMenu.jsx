import "./SideMenu.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

function SideMenu({ open, closeMenu }) {

  const [aboutOpen, setAboutOpen] = useState(false);
  const [initiativesOpen, setInitiativesOpen] = useState(false);

  return (
    <>
      <div
        className={`menu-overlay ${open ? "show" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`side-menu ${open ? "open" : ""}`}>

        <nav className="menu-nav">

          {/* Home */}

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          {/* About */}

          <div className="menu-dropdown">

            <button
              className="menu-link dropdown-trigger"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              <span>About</span>

              {aboutOpen ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}

            </button>

            {aboutOpen && (

              <div className="submenu">

                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className="submenu-link"
                >
                  About ÆXcel
                </NavLink>

                <a
                  href="https://icats.edu.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="submenu-link"
                >
                  iCATS UC
                </a>

              </div>

            )}

          </div>

          {/* Initiatives */}

          <div className="menu-dropdown">

            <button
              className="menu-link dropdown-trigger"
              onClick={() => setInitiativesOpen(!initiativesOpen)}
            >
              <span>Initiatives</span>

              {initiativesOpen ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}

            </button>

            {initiativesOpen && (

              <div className="submenu">

                <NavLink
                  to="/programmes"
                  onClick={closeMenu}
                  className="submenu-link"
                >
                  Programmes
                </NavLink>

                <NavLink
                  to="/resources"
                  onClick={closeMenu}
                  className="submenu-link"
                >
                  Resources
                </NavLink>

                <NavLink
                  to="/ai-literacy"
                  onClick={closeMenu}
                  className="submenu-link"
                >
                  AI Literacy
                </NavLink>

              </div>

            )}

          </div>

          {/* News */}

          <NavLink
            to="/news-insights"
            onClick={closeMenu}
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
          >
            News & Insights
          </NavLink>

          {/* Forum */}

          <NavLink
            to="/forum"
            onClick={closeMenu}
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
          >
            Forum
          </NavLink>

          {/* Contact */}

          <a
            href="#contact"
            onClick={closeMenu}
            className="menu-link"
          >
            Contact
          </a>

        </nav>

      </aside>
    </>
  );
}

export default SideMenu;