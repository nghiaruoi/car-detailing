// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Ceramic from "./components/pages/Service/Ceramic";
import Home from "./components/pages/Home";
import PaintCorrection from "./components/pages/Service/PaintCorrection";
import Contact from "./components/pages/Contact/Contact";
import Booking from "./components/pages/Booking/Booking";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/paint-correction" element={<PaintCorrection />} />
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
