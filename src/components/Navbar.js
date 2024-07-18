import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { loggedIn, handleLogout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="button" to="/">
          fOOD
          <br />
          fOLIO
        </Link>
      </div>
      <div className="reveal-text">
        <ul className="buttons">
          <li>
            <Link className="button" to="/#problems">
              HOME
            </Link>
          </li>
          <li>
            <Link className="button" to="/donation">
              DONATE
            </Link>
          </li>
          <li>
            <Link className="button" to="/inventory">
              INVENTORY
            </Link>
          </li>
          <li>
            <Link className="button" to="/recipes">
              RECIPES
            </Link>
          </li>
          <li>
            <Link className="button" to="/aboutus">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>
      {loggedIn ? (
        <div className="join-button">
          <Link className="join-button button" to="/" onClick={handleLogout}>
            LOG OUT
          </Link>
        </div>
      ) : (
        <div className="join-button">
          <Link className="join-button button" to="/login">
            LOG IN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
