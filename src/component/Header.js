import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + "./images/troll-face.png" } className="header--logo" />
      <h1 className="header--title">Meme Generator</h1>
      <h4 className="header--desc">React Course - Project 3</h4>
    </div>
  );
}
