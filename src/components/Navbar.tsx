import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <nav
        className={`bg-black border border-gray-800 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 flex-grow justify-end pr-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/chi-siamo"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              CHI SIAMO
            </NavLink>
            <NavLink
              to="/adv"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              ADV
            </NavLink>
            <NavLink
              to="/contatti"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              CONTATTI
            </NavLink>
          </div>

          {/* Centered Logo */}
          <NavLink to="/" className="flex items-center flex-shrink-0">
            <img src="/assets/logo.png" alt="Extro Logo" className="h-10 w-auto" />
          </NavLink>

          {/* Right Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 flex-grow justify-start pl-8">
            <NavLink
              to="/capelli"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              CAPELLI
            </NavLink>
            <NavLink
              to="/beauty"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              BEAUTY
            </NavLink>
            <NavLink
              to="/sposa"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              SPOSA
            </NavLink>
            <NavLink
              to="/prenota/servizio"
              className={({ isActive }) =>
                `nav-link-black ${isActive ? "active" : ""} text-sm tracking-wider`
              }
            >
              PRENOTA
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pt-20`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-8">
          {[
            { path: "/", label: "HOME" },
            { path: "/chi-siamo", label: "CHI SIAMO" },
            { path: "/adv", label: "ADV" },
            { path: "/contatti", label: "CONTATTI" },
            { path: "/capelli", label: "CAPELLI" },
            { path: "/beauty", label: "BEAUTY" },
            { path: "/sposa", label: "SPOSA" },
            { path: "/prenota/servizio", label: "PRENOTA" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="text-xl font-heading text-white hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;