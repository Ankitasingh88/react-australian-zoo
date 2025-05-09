import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: "Home", path: "/" },
    { name: "Mammals", path: "/mammals" },
    { name: "Birds", path: "/birds" },
    { name: "Reptiles", path: "/reptiles" },
  ];

  const handleCategoryClick = () => {
    setMenuOpen(false); // close menu when a link is clicked
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Paradise Zoo</div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {categories.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onClick={handleCategoryClick}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;