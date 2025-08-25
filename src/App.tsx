import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import AboutUs from "./pages/AboutUs";
import ShopPage from "./shop/pages/ShopPage";

import SelectService from "./booking/SelectService";
import SelectBarber from "./booking/SelectBarber";
import SelectTimeSlot from "./booking/SelectTimeSlot";
import BookingSuccess from "./booking/BookingSuccess";
import Wedding from "./pages/Wedding";

import { CartProvider } from "./shop/context/CartContext";
import { VapiProvider } from "./context/VapiContext";

function App() {
  return (
    <CartProvider>
      <VapiProvider>
        <Router>
          <div className="font-primary bg-black text-white min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chi-siamo" element={<AboutUs />} />
              <Route path="/servizi" element={<ServicesPage />} />
              <Route path="/galleria" element={<GalleryPage />} />
              <Route path="/sposa" element={<Wedding />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/prenota/servizio" element={<SelectService />} />
              <Route path="/prenota/barbiere" element={<SelectBarber />} />
              <Route path="/prenota/orario" element={<SelectTimeSlot />} />
              <Route path="/prenota/successo" element={<BookingSuccess />} />
            </Routes>
          </div>
        </Router>
      </VapiProvider>
    </CartProvider>
  );
}

export default App;