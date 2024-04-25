import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="p-4 h-128 flex items-center justify-between">
      {/* Logo */}
      <div className=" ml-100px flex items-center">
        <img src="/logo.png" alt="Logo" className="h-128 mr-2" />
      </div>

      {/* Liens du milieu */}
      <div className="flex justify-center space-x-4">
        <div className="border rounded-full border-darkgreen py-2 px-4">
          <a href="#" className="text-sm text-darkgreen font-semibold">A propos</a>
        </div>
        <div className="border rounded-full border-darkgreen py-2 px-4">
          <a href="#" className="text-sm text-darkgreen font-semibold">Pour enfants</a>
        </div>
        <div className="border rounded-full border-darkgreen py-2 px-4">
          <a href="#" className="text-sm text-darkgreen font-semibold">Pour parents</a>
        </div>
      </div>

      {/* Contact */}
      <div className="border rounded-full border-darkgreen bg-darkgreen text-white py-2 mr-100px px-4">
        <a href="#" className="text-sm font-semibold">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

