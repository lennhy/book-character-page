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
        <div className="background-banner">
          <div className="video-container">
  
        <div className="video-wrapper">
          <video  
              id="video-box" 
              autoPlay 
              muted 
              loop 
              playsInline
              style={{ width: '100%', height: '100%' }} 

              >
              <source src="/videos/title-sequence2.mp4" type="video/mp4" />
          </video>            
          </div>
        </div>

        </div>
        {/* <div className="intro-landing"><div>Provocative and visceral storytelling</div></div> */}

          {/* <section className="home-gallery">
            {categories.map((cat, i) => (
                      <ImageContent key={cat} category={cat} index={i} />
            ))}
          </section> */}
      </div>
    </section>
  )
}
