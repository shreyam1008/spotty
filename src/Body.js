import React from "react";
import "./Body.css";
import Header from "./Header";

const Body = ({ spotify }) => {
  console.log(spotify);
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src="" alt="" />
        <div className="body__infoText"></div>
        <strong>Playlist</strong>
        <h2>discovber weekly</h2>
        <p>description</p>
      </div>
    </div>
  );
};

export default Body;
