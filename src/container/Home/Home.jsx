import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" className="app__home app__flex">
      <div className="app__home-info">
        <h2 className="app__home-title">Custom Tattooing</h2>
        <p className="app__home-text">
          Thank you for stopping by to check out my work. If you enjoy my art or
          would like more information, please fill out the contact form and let
          me know.
        </p>
      </div>
    </div>
  );
};

export default Home;
