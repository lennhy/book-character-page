import ImageContent from "./ImageContent.js";
import "./gallery.css";
export default function Gallery() {
  const categories = ["comics", "novels", "characters"];
  let currentCatSlected = null;

  return (
    <>
      <h2></h2>
      <section className="gallery">
        {categories.map((cat, i) => (
          <ImageContent key={cat} category={cat} index={i} />
        ))}
      </section>
    </>
  );
}
