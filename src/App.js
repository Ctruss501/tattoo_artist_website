import "./App.scss";
import React, { useState } from "react";
import { Home, Gallery, Contact } from "./container";
import { Navbar } from "./components";

function App() {
  // Declaring state variable for theme.
  const [theme, setTheme] = useState("dark");

  // Function to toggle theme.
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  //{`app app__theme-${theme}`}
  return (
    //try adding app__container to this to wrap the entire site
    //maybe will not need to add all the styling to the other
    //sections if done here.
    <div className="app" id={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
