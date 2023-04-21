import { useState } from "react";
import "./image-content.css";

export default function ImageContent(props) {
  console.log(props);
  const [hoverImage, setHoverImage] = useState(false);
  let imgUrl = `../../${props.category}.jpg`;

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
    <div className="category-image-wrapper">
      <img
        onMouseOver={(e) => {
          mouseEventHandler(e);
          setHoverImage(true);
        }}
        onMouseOut={(e) => {
          mouseEventHandler(e);
          setHoverImage(false);
        }}
        className="category-image"
        src={imgUrl}
        alt={props.category}
      />
      <div className="category-image__text">
        <h3>{props.category}</h3>
      </div>
    </div>
  );
}
