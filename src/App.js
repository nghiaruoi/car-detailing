// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Ceramic from "./components/pages/Service/Ceramic";
import Home from "./components/pages/Home";
import PaintCorrection from "./components/pages/Service/PaintCorrection";
import Contact from "./components/pages/Contact/Contact";
import Booking from "./components/pages/Booking/Booking";
import Cosmopolitan from "./components/pages/Service/Cosmopolitan";
import PremiumInteriorDetailing from "./components/pages/Service/PremiumInteriorDetailing";
import PremiumExterior from "./components/pages/Service/PremiumExterior";
import Porsche from "./components/pages/Service/Porsche";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/paint-correction" element={<PaintCorrection />} />
          <Route path="/interior" element={<PremiumInteriorDetailing />} />
          <Route path="/exterior" element={<PremiumExterior/>} />
          <Route path="/cosmopolitan" element={<Cosmopolitan/>} />
          <Route path="/porsche" element={<Porsche/>} />
          <Route path="/ceramic" element={<Ceramic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
