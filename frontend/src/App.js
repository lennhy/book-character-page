import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import { useEffect, useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeGallery from "./components/HomeGallery/HomeGallery";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import BookToMoviesList from "./components/BooksToMoviesList/BooksToMoviesList";
import IllustrationsPage from "./Pages/IllustrationsPage";
import MailchimpForm from "./components/MailchimpForm/MailchimpForm";
import NovelPage from "./Pages/NovelPage";
import FilmPage from "./Pages/FilmPage";
import ComicPage from "./Pages/ComicPage";

// Root
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadText, setLoadText] = useState("loading");

  // Logic for naimation load - Use same animation for navigation menu
useEffect(()=>{
  document.onreadystatechange = () => {
    if (document.readyState !== "complete") {
        setLoading(true)
    } else {
      // setLoadText("polyverge")
      // setTimeout(()=>{
        setLoading(false)
      // }, 2000)
    }
    console.log(loading)
  };
})


  let toggleVisibility = () =>{
    isVisible ? setIsVisible(false) :  setIsVisible(true)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <div className="loading" style={loading ? {'display': 'block'} : {'display': 'none'}} >
        <div className="loading__load-ruler"></div>
        <div className="loading-text">{loadText}</div>
        <div className="loading__load-ruler--2"></div>
      </div>
        <div className="nav-links" onClick={toggleVisibility}>
              <span className="box-shadow-menu"></span>
        </div>
        <Navbar />
        <MobileNavbar scale={isVisible ? 'scale-up-menu' : 'scale-down-menu'} toggle={toggleVisibility}>
        </MobileNavbar>

        <Routes >
          <Route path="/" element={<HomeGallery />}></Route>
          <Route path="/film" element={<FilmPage />}></Route>
          <Route path="/novels" element={<NovelPage />}></Route>
          <Route path="/comics" element={<ComicPage />}></Route>
          <Route path="/topbookadaptations" element={<BookToMoviesList />}></Route>
          <Route path="/illustrations" element={<IllustrationsPage />}></Route>
          <Route path="/newsletter" element={<MailchimpForm />}></Route>
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

