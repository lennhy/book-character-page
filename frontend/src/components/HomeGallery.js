import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import ImageContent from "./ImageContent.js";
import "./home-gallery.css";
import "../App.css";

export default function HomeGallery() {
  const categories = ["Illustrations", "Novels", "Film"];
  let currentCatSlected = null;

  return (
    <section class="page-comtainer">
     <section class="flex-center">
        <div class="text-container">
          <h1>POLYVERGE</h1>
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
