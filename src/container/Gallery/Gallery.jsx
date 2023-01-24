import React from "react";
import "./Gallery.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Gallery = () => {
  return (
    <>
      <h2 className="header-text">Gallery</h2>
      <div className="app__gallery">
        <div className="app__tattoo-img">
          <img src={images.blackclover} alt="Black Clover Tattoo" />
          <img src={images.demonslayer} alt="Demon Slayer Tattoo" />
          <img src={images.fireforce} alt="Fire Force Tattoo" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
