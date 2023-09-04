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
  const [toggleState, setToggleState] = useState("0");
  const [loading, setLoading] = useState(true);
  const [loadText, setLoadText] = useState("polyverge");

  // Logic for naimation load - Use same animation for navigation menu
// useEffect(()=>{
  // document.onreadystatechange = () => {
  //   if (document.readyState !== "complete") {
  //       setLoading(true)
  //   } else {
      setTimeout(()=>{
        setLoading(false)
      }, 2000)
  //   }
  //   console.log(loading)
  // };
// })


  const toggleVisibility = () =>{
   if(toggleState === "0"){
    setToggleState("100%")
   }else{
    setToggleState("0")
   }
  
    // if(toggleState !== "scale-up-menu"){
    //   setToggleState("scale-up-menu")
    // } else{
    //   setToggleState("scale-down-menu")
    // }
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
              <div className="box-shadow-menu"></div>
        </div>
        <Navbar />
        <MobileNavbar scale={toggleState} toggle={toggleVisibility}>
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

