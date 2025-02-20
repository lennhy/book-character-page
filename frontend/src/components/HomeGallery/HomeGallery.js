import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import ImageContent from "../ImageContent/ImageContent.js";
import "./home-gallery.css";
import "../../App.css";

export default function HomeGallery() {
  const categories = ["illustrations", "books", "film"];
  let currentCatSlected = null;

  return (
    <section className="page-comtainer">
     <section className="flex-center">
        <div className="text-container">
          {/* <h3>Provocative and visceral content that inspires and entertains through art and storytelling</h3> */}
        </div>
      </section>
      <div className="App-header">
        <div className="background-banner">POLYVERGE</div>
        {/* <div className="intro-landing"><div>Provocative and visceral storytelling</div></div> */}

          <section className="home-gallery">
            {categories.map((cat, i) => (
                      <ImageContent key={cat} category={cat} index={i} />
            ))}
          </section>
      </div>
    </section>
  )
}
