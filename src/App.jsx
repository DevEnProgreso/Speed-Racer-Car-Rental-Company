import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Index from "./components/Pages/Index";
import CarDetails from "./components/Pages/CarDetails";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Cars from "./components/Pages/Cars";
import Blog from "./components/Pages/Blog";
import Teams from "./components/Pages/Teams";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
