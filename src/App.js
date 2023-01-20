import "./App.scss";
import React, { useState } from "react";
import { About, Gallery, Contact } from "./container";
import { Navbar } from "./components";

function App() {
  // Declaring state variable for theme.
  const [theme, setTheme] = useState("light");

  // Function to toggle theme.
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  //{`app app__theme-${theme}`}
  return (
    <div className="app" id={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
