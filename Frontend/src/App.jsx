import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalLoader from './Components/GlobalLoader';
import Navbar from './Components/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import Home from './Pages/Home';
import Products from './pages/Products';
import TrialPack from './pages/TrialPack';

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
      </Router>
    </GlobalLoader>
  );
}

export default App;