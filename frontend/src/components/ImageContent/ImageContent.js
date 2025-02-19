import { useState } from "react";
import "./image-content.css";

export default function ImageContent({ category, index }) {
  const [hoverImage, setHoverImage] = useState(false);
  const youtTubeVideos = ["https://www.youtube.com/embed/M7zoHmCqJHs?si=lZeNQAwTB4V1Nb5Q", "https://www.youtube.com/embed/AqKIXAYWllA?si=i5MDABiRxzVM9gRx", "https://www.youtube.com/embed/Q3psw5wizAE?si=n2GRMyL1yECrZeBA"]
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
      <div
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
      >
        <iframe 
              width="420" 
              height="236.25" 
              src={`${youtTubeVideos[index]}&showinfo=0&controls=0&autohid=1`}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              controls="0"
              showinfo="0" 
              >
                
            </iframe>
      </div>
      {/* <div className="category-image__text">
        <h3>{category}</h3>
      </div> */}
    </div>
  );
}
