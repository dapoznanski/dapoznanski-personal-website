import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/about/About";
import Publications from "./pages/Publications";

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
                </Routes>
            </div>
        </div>
    );
}

export default App;
