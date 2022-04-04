import React from "react";
import memeData from "../memeData";

function Meme() {
  // const [memeImage, setMemeImage] = React.useState("");

  const[meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  })

  const[allMemeImages, setAllMemeImages] = React.useState(memeData)
  let url;

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url
    setMeme(prevMeme => {
      return{
        ...prevMeme, //brings in all the previos properties(keeps them)
       randomImage: url
      }
    })
  }

  return (
    <div className="meme-container">
      <div className="form">
        <input className="form-input" type="text" placeholder="Name" />
        <input className="form-input" type="text" placeholder="MATA" />
        <button className="form-button" onClick={getMemeImage} type="submit">
          Generate MEME !!!
        </button>
      </div>
      <img className="img-meme" src={meme.randomImage}/>

    </div>
  );
}

export default Meme;
