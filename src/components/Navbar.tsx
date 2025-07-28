import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../shop/context/CartContext';
import CartDrawer from '../shop/components/CartDrawer';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed w-full z-50 transition-all duration-300">
        <nav className={`bg-black border border-gray-800 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6'
        }`}>
          <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
            {/* Left Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 flex-grow justify-end pr-8">
              <NavLink to="/" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>HOME</NavLink>
              <NavLink to="/chi-siamo" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>CHI SIAMO</NavLink>
              <NavLink to="/adv" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>ADV</NavLink>
              <NavLink to="/contatti" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>CONTATTI</NavLink>
            </div>

            {/* Centered Logo */}
            <NavLink to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/assets/logo.png" 
                alt="Feivèr Logo" 
                className="h-10 w-auto"
              />
            </NavLink>

            {/* Right Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 flex-grow justify-start pl-8">
              <NavLink to="/capelli" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>CAPELLI</NavLink>
              <NavLink to="/beauty" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>BEAUTY</NavLink>
              <NavLink to="/sposa" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>SPOSA</NavLink>
              <NavLink to="/prenota/servizio" className={({ isActive }) => `nav-link-black ${isActive ? 'active' : ''} text-sm tracking-wider`}>PRENOTA</NavLink>

              {/* Cart Icon */}
              <button
                className="relative text-white hover:text-gold transition-colors"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart size={24} />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalQuantity}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}>
          <div className="container mx-auto px-4 flex flex-col space-y-8">
            {['/', '/chi-siamo', '/adv', '/contatti', '/capelli', '/beauty', '/sposa', '/prenota/servizio'].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                className="text-xl font-heading text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {path === '/' ? 'HOME' : 
                 path === '/chi-siamo' ? 'CHI SIAMO' :
                 path === '/adv' ? 'ADV' :
                 path === '/contatti' ? 'CONTATTI' :
                 path === '/capelli' ? 'CAPELLI' :
                 path === '/beauty' ? 'BEAUTY' :
                 path === '/sposa' ? 'SPOSA' :
                 path === '/prenota/servizio' ? 'PRENOTA' : path.replace('/', '').toUpperCase()}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;