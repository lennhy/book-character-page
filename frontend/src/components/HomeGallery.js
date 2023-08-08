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
          <ImageContent key={cat} category={cat} index={i} />
        ))}
      </section>
    </header>
  )
}
