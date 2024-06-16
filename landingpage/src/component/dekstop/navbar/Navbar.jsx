import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset >= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSubPage = location.pathname !== "/";

  return (
    <nav
      className={`p-4 h-24 flex items-center justify-between bg-white z-50 ${
        isSticky ? "fixed top-0 left-0 w-full" : ""
      }`}
    >
      {/* Logo */}
      <div className="ml-100px flex items-center">
        <img src="/logo.png" alt="Logo" className="h-128 mr-2" />
      </div>

      {/* Liens du milieu */}
      <div className="flex justify-center space-x-4">
        <button className="border hover:bg-darkgreen text-darkgreen hover:text-white rounded-full border-darkgreen py-2 px-4 focus:outline-none focus:border-transparent">
          <a
            href={isSubPage ? "/#" : "/#"}
            className=" text-sm"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Accueil
          </a>
        </button>
        <button className="border hover:bg-darkgreen text-darkgreen hover:text-white rounded-full border-darkgreen py-2 px-4 focus:outline-none focus:border-transparent">
          <a
            href={isSubPage ? "/#enfant" : "/#enfant"}
            className="text-sm"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Pour enfants
          </a>
        </button>
        <button className="border hover:bg-darkgreen text-darkgreen hover:text-white rounded-full border-darkgreen py-2 px-4 focus:outline-none focus:border-transparent">
          <a
            href={isSubPage ? "/#parent" : "/#parent"}
            className="text-sm"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Pour parents
          </a>
        </button>
      </div>

      {/* Contact */}
      <button className="border mr-100px rounded-full border-darkgreen text-darkgreen hover:text-darkgreen hover:border-lightgreen hover:bg-lightgreen bg-darkgreen text-white py-2 px-4 focus:outline-none focus:border-transparent">
        <a
          href={isSubPage ? "/#contact" : "/#contact"}
          className="Rubik text-sm font-semibold"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Contact
        </a>
      </button>
    </nav>
  );
}

export default Navbar;
