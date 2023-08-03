import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery.js";

// Root
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery />
      </header>
    </div>
  );
}

export default App;
