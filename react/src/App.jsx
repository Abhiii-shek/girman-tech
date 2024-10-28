import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResult';
import Navbar from './components/Navbar';
import bgImage from "../src/assets/images/bg-image.png"

import "./App.css"


const App = () => {
  const appStyle = {
    backgroundImage: `linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
  };
  return (
    <div style={appStyle}>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
