import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" className="app__home app__flex">
      <div className="app__home-info">
        <h2 className="app__home-title">Custom Tattooing</h2>
        <p className="app__home-text">
          Hi, I'm Ralph. I have a passion for creating incredible tattoos.
        </p>
      </div>
    </div>
  );
};

export default Home;
