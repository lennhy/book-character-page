import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import ImageContent from "./ImageContent.js";
import "./home-gallery.css";
import "../App.css";
export default function HomeGallery() {
  const categories = ["Comics", "Novels", "Film"];
  let currentCatSlected = null;

  return (
    <header className="App-header">
      <h2></h2>
      <section className="home-gallery">
        {categories.map((cat, i) => (
                  <NavLink to={`/${cat}`}>
                  <ImageContent key={cat} category={cat} index={i} /></NavLink>
        ))}
      </section>
    </header>
  )
}
