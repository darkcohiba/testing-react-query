import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Weather from './components/Weather.js';
import NavBar from "./components/NavBar.js";



function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/weather" element={<Weather />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

