import { useState } from "react";
import "./image-content.css";

export default function ImageContent({ category, index }) {
  const [hoverImage, setHoverImage] = useState(false);
  // let imgUrl = `../../${category}.jpg`;

  let imgUrl = process.env.PUBLIC_URL + `${category}.jpg`
  // console.log(process.env.PUBLIC_URL)

  function mouseEventHandler(e) {
    if (hoverImage) {
      // if true - mouseover
      // e.target.style.boxShadow = "none";
      // e.target.style.scale = "1";
    } else {
      // if false - mouseout
      // e.target.style.boxShadow = "8px 8px #000";
      // e.target.style.scale = "1.05";
    }
  }
  return (
    <div className="category-image" key={index}>
      <img
        onMouseOver={(e) => {
          mouseEventHandler(e);
          setHoverImage(true);
        }}
        onMouseOut={(e) => {
          mouseEventHandler(e);
          setHoverImage(false);
        }}
        className={`category-image__image category-image__image--${index}`}
        src={imgUrl}
        alt={category}
      />
      <div className="category-image__text">
        <h3>{category}</h3>
      </div>
    </div>
  );
}
