import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Publications from "./pages/Publications";
import CV from "./pages/CV";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
