import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { loggedIn, handleLogout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "responsive" : ""}`}>
      <div className="logo">
        <Link className="button" to="/" onClick={closeMenu}>
          fOOD
          <br />
          fOLIO
        </Link>
      </div>
      {!menuOpen && (
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      )}
      {menuOpen && (
        <div className="close-icon" onClick={closeMenu}>
          &times;
        </div>
      )}
      <div className={`reveal-text ${menuOpen ? "open" : ""}`}>
        <ul className="buttons">
          <li>
            <Link className="button" to="/#problems" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link className="button" to="/donation" onClick={closeMenu}>
              DONATE
            </Link>
          </li>
          <li>
            <Link className="button" to="/inventory" onClick={closeMenu}>
              INVENTORY
            </Link>
          </li>
          <li>
            <Link className="button" to="/recipes" onClick={closeMenu}>
              RECIPES
            </Link>
          </li>
          <li>
            <Link className="button" to="/aboutus" onClick={closeMenu}>
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>
      {loggedIn ? (
        <div className="join-button">
          <Link className="join-button button" to="/" onClick={() => { handleLogout(); closeMenu(); }}>
            LOG OUT
          </Link>
        </div>
      ) : (
        <div className="join-button">
          <Link className="join-button button" to="/login" onClick={closeMenu}>
            LOG IN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
