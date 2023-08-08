import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeGallery from "./components/HomeGallery.js";
import NovelPage from "./components/NovelPage";
import FilmPage from "./components/FilmPage";
import ComicPage from "./components/ComicPage";
import Navbar from "./components/Navbar";

// Root
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <header className="App-header">
          <HomeGallery />
        </header> */}
        <Routes>
          <Route path="/" element={<HomeGallery />}></Route>
          <Route path="/film" element={<FilmPage />}></Route>
          <Route path="/novels" element={<NovelPage />}></Route>
          <Route path="/comics" element={<ComicPage />}></Route>

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
