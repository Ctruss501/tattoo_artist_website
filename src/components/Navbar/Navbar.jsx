import React, { useState } from "react";
import "./Navbar.scss";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-title">
        <h3>Ralph Tattoos</h3>
      </div>
      <ul className="app__navbar-links">
        {["home", "gallery", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-theme-btn">
        <BsFillMoonStarsFill onClick={props.toggleTheme} />
      </div>
      <div className="app__navbar-menu">
        <IoIosMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <IoIosClose onClick={() => setToggle(false)} />
            <ul>
              {["home", "gallery", "contact"].map((item) => (
                <li key={`link-${item}`}>
                  <div />
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
