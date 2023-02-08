import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const [page, setPage] = useState("about");

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    const location = window.location.href.split('/')[3]
    if(location === ''){
        setPage('about')
        return
    }
    setPage(location)
  }, [])

  return (
    <Router>
      <>
        <Navbar handlePageChange={handlePageChange} page={page} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
