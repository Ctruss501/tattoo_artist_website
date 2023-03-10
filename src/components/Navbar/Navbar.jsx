import React, { useState } from "react";
import "./Navbar.scss";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-title">
        <h3>Ralph Tattoos</h3>
      </div>
      <ul className="app__navbar-links">
        {["home", "gallery", "contact"].map((item) => (
          <li className="app__flex" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <BsFillMoonStarsFill
        className="app__navbar-theme-btn"
        onClick={props.toggleTheme}
      />

      <div className="app__navbar-menu">
        <IoIosMenu onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <IoIosClose onClick={() => setToggleMenu(false)} />
            <ul>
              {["home", "gallery", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggleMenu(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <BsFillMoonStarsFill
              className="app__navbar-menu-theme-btn"
              onClick={props.toggleTheme}
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
