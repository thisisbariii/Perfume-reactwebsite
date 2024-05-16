import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="+917900040199"
        chatMessage="Hello there! 🤝 \nHow can we help?" 
        placeholder="Type a message.."
        notification={false} 
      />
    </Router>
  );
}

export default App;
