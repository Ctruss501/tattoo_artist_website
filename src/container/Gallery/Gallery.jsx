import React from "react";
import "./Gallery.scss";
import { images } from "../../constants";

const Gallery = () => {
  return (
    <div id="gallery">
      <h2 className="header-text">Gallery</h2>
      <div className="app__gallery app__flex">
        <div className="app__tattoo-img">
          <img src={images.blackclover} alt="Black Clover Tattoo" />
        </div>
        <div className="app__tattoo-img">
          <img src={images.demonslayer} alt="Demon Slayer Tattoo" />
        </div>
        <div className="app__tattoo-img">
          <img src={images.fireforce} alt="Fire Force Tattoo" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
