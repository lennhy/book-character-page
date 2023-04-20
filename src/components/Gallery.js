import ImageContent from "./ImageContent.js";
import "./gallery.css";
export default function Gallery() {
  const categories = [
    "pexels-blue-arauz-14546036",
    "pexels-simon-berger-2193186",
    "pexels-miggy-rivera-5665104",
  ];
  let currentCatSlected = null;

  return (
    <>
      <h2>Characters</h2>
      <section className="gallery">
        {categories.map((cat) => (
          <ImageContent key={cat} category={cat} />
        ))}
      </section>
    </>
  );
}
