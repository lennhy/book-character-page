import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeGallery from "./components/HomeGallery/HomeGallery";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import BookToMoviesList from "./components/BooksToMoviesList/BooksToMoviesList";
import IllustrationsPage from "./Pages/IllustrationsPage";
import MailchimpForm from "./components/MailchimpForm/MailchimpForm";
import NovelPage from "./Pages/NovelPage";
import FilmPage from "./Pages/FilmPage";
import ComicPage from "./Pages/ComicPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadText, setLoadText] = useState("polyverge");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleVisibility = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="loading" style={loading ? {'display': 'block'} : {'display': 'none'}}>
          <div className="loading__load-ruler"></div>
          <div className="loading-text">{loadText}</div>
          <div className="loading__load-ruler--2"></div>
        </div>

        <div
          className={`box-shadow-menu ${isMenuOpen ? 'rotate-shadow-menu' : ''}`}
          onClick={toggleVisibility}
        ></div>

        <Navbar />
        <MobileNavbar scale={isMenuOpen ? '100%' : '0'} toggle={toggleVisibility} />

        <Routes>
          <Route path="/" element={<HomeGallery />}></Route>
          <Route path="/film" element={<FilmPage />}></Route>
          <Route path="/novels" element={<NovelPage />}></Route>
          <Route path="/comics" element={<ComicPage />}></Route>
          <Route path="/topbookadaptations" element={<BookToMoviesList />}></Route>
          <Route path="/illustrations" element={<IllustrationsPage />}></Route>
          <Route path="/newsletter" element={<MailchimpForm />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;