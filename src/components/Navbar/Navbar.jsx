import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Gallery</li>
        <li>Contact</li>
        <li>
          <button onClick={props.toggleTheme}>Toggle Dark Mode</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
