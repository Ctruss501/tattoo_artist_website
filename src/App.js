import "./App.css";
import React, { useState } from "react";
import { About, Gallery, Contact } from "./container";
import { Navbar } from "./components";

function App() {
  // Declaring state variable for theme.
  const [theme, setTheme] = useState("light");

  // Function to toggle theme.
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`app app__theme-${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
