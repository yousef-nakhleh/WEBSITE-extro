import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutUs from './pages/AboutUs';
import ShopPage from './shop/pages/ShopPage';

import SelectService from './booking/SelectService';
import SelectBarber from './booking/SelectBarber';
import SelectTimeSlot from './booking/SelectTimeSlot';
import BookingSuccess from './booking/BookingSuccess';
import Wedding from './pages/Wedding';

import { CartProvider } from './shop/context/CartContext'; // ✅ IMPORTED
import { VapiProvider } from './context/VapiContext'; // ✅ IMPORTED

function App() {
  return (
    <CartProvider> {/* ✅ WRAPS the entire app with cart logic */}
      <VapiProvider> {/* ✅ WRAPS the entire app with Vapi logic */}
        <Router>
          <div className="font-primary bg-black text-white min-h-screen">
            <Navbar />
            <Routes>
              {/* Website pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/chi-siamo" element={<AboutUs />} />
              <Route path="/servizi" element={<ServicesPage />} />
              <Route path="/galleria" element={<GalleryPage />} />
              <Route path="/sposa" element={<Wedding />} />
              <Route path="/shop" element={<ShopPage />} />

              {/* Booking flow */}
              <Route path="/prenota/servizio" element={<SelectService />} />
              <Route path="/prenota/barbiere" element={<SelectBarber />} />
              <Route path="/prenota/orario" element={<SelectTimeSlot />} />
              <Route path="/prenota/successo" element={<BookingSuccess />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </VapiProvider>
    </CartProvider>
  );
}

export default App;