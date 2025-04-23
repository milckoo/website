import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import GlobalLoader from './Components/GlobalLoader';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs'; // Correctly import AboutUs
import ContactUs from './Pages/ContactUs';
import FAQs from './Pages/FAQs';
import Home from './Pages/Home';
import Products from './Pages/Products';
import TrialPack from './Pages/TrialPack';

function App() {
  return (
    <GlobalLoader>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/trial-pack" element={<TrialPack />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <Footer />
      </Router>
    </GlobalLoader>
  );
}

export default App;
