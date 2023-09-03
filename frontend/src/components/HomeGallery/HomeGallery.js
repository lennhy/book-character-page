import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import ImageContent from "../ImageContent/ImageContent.js";
import "./home-gallery.css";
import "../../App.css";

export default function HomeGallery() {
  const categories = ["illustrations", "novels", "film"];
  let currentCatSlected = null;

  return (
    <section className="page-comtainer">
     <section className="flex-center">
        <div className="text-container">
          {/* <h3>Provocative and visceral content that inspires and entertains through art and storytelling</h3> */}
        </div>
      </section>
    <div className="App-header">
   
    <div className="backgroun-image"></div>
     
      <section className="home-gallery">
        {categories.map((cat, i) => (
                  <NavLink to={`/${cat}`} key={cat}>
                  <ImageContent key={cat} category={cat} index={i} /></NavLink>
        ))}
      </section>
    </div>
    </section>
  )
}
