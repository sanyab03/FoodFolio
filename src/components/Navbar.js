// import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";


// export default function Navbar() {
//   const location = useLocation();

//   const isHome = location.pathname === "/";
//   <header className={`navbar ${isHome ? "navbar-dark" : "navbar-light"}`}></header>
//   const navigate = useNavigate();

//   const goToDonate = () => {
//     if (window.location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: "donate" } });
//     } else {
//       const section = document.getElementById("donate");

//       if (section) {
//         section.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-logo">
//         🍃 <span>FoodFolio</span>
//       </div>

//       <nav>
//         <ul className="navbar-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>

//           <li>
//             <Link to="/inventory">Inventory</Link>
//           </li>

//           <li>
//             <button onClick={goToDonate}>Donate</button>
//           </li>
//         </ul>
//       </nav>

//       <Link to="/signup" className="navbar-btn">
//         Get Started
//       </Link>
//     </header>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className={`navbar ${isHome ? "navbar-dark" : "navbar-light"}`}>
      <Link to="/" className="navbar-logo">
        🍃 <span>FoodFolio</span>
      </Link>

      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/inventory">Inventory</Link>
          </li>

          <li>
            <Link to="/donation">Donate</Link>
          </li>

          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>

      <Link to="/signup" className="navbar-btn">
        Get Started
      </Link>
    </header>
  );
}