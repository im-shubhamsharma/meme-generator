import React from "react";
import memesData from "../memesData";

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage(){
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let randomMemeUrl = memesArray[randomNumber].url;

    setMeme( prevMeme => ({
      ...prevMeme,
      randomImage: randomMemeUrl
    }))
  }

  

  return (
    <div className="form--section">
      <form className="form--input">
        <input />
        <input />
      </form>

      <button onClick={getMemeImage} className="form--button">
        Get an new meme image
      </button>

      <img className="form--image" src={meme.randomImage} />
    </div>
  );
}
