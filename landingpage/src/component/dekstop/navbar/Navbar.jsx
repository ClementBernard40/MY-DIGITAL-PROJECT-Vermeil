import React, { useState, useEffect } from 'react';
import './navbar.css';


function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset >= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`p-4 h-24 flex items-center justify-between bg-white z-50 ${isSticky ? 'fixed top-0 left-0 w-full' : ''}`}>
      {/* Logo */}
      <div className="ml-100px flex items-center">
        <img src="/logo.png" alt="Logo" className="h-128 mr-2" />
      </div>

      {/* Liens du milieu */}
      <div className="flex justify-center space-x-4">
        <button className="border hover:bg-darkgreen text-darkgreen hover:text-white rounded-full border-darkgreen py-2 px-4 focus:outline-none focus:border-transparent">
          <a href="#" className=" text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>A propos</a>
        </button>
        <button className="border hover:bg-darkgreen text-darkgreen hover:text-white rounded-full border-darkgreen py-2 px-4 focus:outline-none focus:border-transparent">
          <a href="#enfant" className="text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>Pour enfants</a>
        </button>
        <button className="border hover:bg-darkgreen text-darkgreen hover:text-white rounded-full border-darkgreen py-2 px-4 focus:outline-none focus:border-transparent">
          <a href="#parent" className="text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>Pour parents</a>
        </button>
      </div>

      {/* Contact */}
      <button className="border mr-100px rounded-full border-darkgreen text-darkgreen hover:text-white hover:bg-orangee bg-darkgreen text-white py-2 px-4 focus:outline-none focus:border-transparent">
        <a href="#contact" className="Rubik text-sm font-semibold" style={{ fontFamily: 'Rubik, sans-serif' }}>Contact</a>
      </button>
    </nav>
  );
}

export default Navbar;

