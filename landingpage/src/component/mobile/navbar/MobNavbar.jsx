import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline'; // Assurez-vous d'importer la bonne version d'icônes
import './navbar.css';


function MobNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0); // La navbar devient sticky dès que le défilement n'est pas en haut
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav className={`p-4 flex items-center z-40 justify-between ${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-lg' : ''}`}>
      <div className="ml-4 flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
      </div>

      {/* Menu déroulant */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref} className={`absolute top-16 right-4 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="py-1">
              <a href="#" className="Rubik block px-4 py-2 text-sm text-darkgreen hover:bg-gray-100" style={{ fontFamily: 'Rubik, sans-serif' }}>A propos</a>
              <a href="#enfant" className="Rubik block px-4 py-2 text-sm text-darkgreen hover:bg-gray-100" style={{ fontFamily: 'Rubik, sans-serif' }}>Pour enfants</a>
              <a href="#parent" className="Rubik block px-4 py-2 text-sm text-darkgreen hover:bg-gray-100" style={{ fontFamily: 'Rubik, sans-serif' }}>Pour parents</a>
              <a href="#contact" className="Rubik block px-4 py-2 text-sm text-darkgreen hover:bg-gray-100 " style={{ fontFamily: 'Rubik, sans-serif' }}>Contact</a>
            </div>
          </div>
        )}
      </Transition>

      {/* Menu mobile */}
      <div className="mr-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-darkgreen hover:text-darkgreen focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkgreen"
        >
          <span className="sr-only z-50">Open main menu</span>
          <MenuIcon className="h-6 w-6 z-50" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

export default MobNavbar;
