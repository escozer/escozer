import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VirtualTryOn from './pages/VirtualTryOn';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtual-try-on" element={<VirtualTryOn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;