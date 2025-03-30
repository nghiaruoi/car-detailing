import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    // Close dropdown when toggling mobile menu
    if (isDropdownOpen) setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="p-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png" // Add your logo path
              alt="Company Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `font-bold transition duration-300 rounded-lg py-2 px-4 ${
                isActive 
                  ? 'bg-custom-blue text-white' 
                  : 'text-black hover:bg-custom-blue hover:text-white'
              }`
            }
            end
          >
            Home
          </NavLink>

          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4 text-black"
          >
            Services
          </ScrollLink>

          {/* Packages Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="font-bold transition duration-300 rounded-lg py-2 px-4 flex items-center text-black hover:bg-custom-blue hover:text-white"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Packages
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div 
                className="absolute top-12 left-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                role="menu"
              >
                <ul className="p-2 text-sm">
                  <li role="none">
                    <NavLink
                      to="/interior"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg text-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={closeMobileMenu}
                    >
                      Premium Interior Detailing
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink
                      to="/exterior"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg text-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={closeMobileMenu}
                    >
                      Premium Exterior Detailing
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink
                      to="/cosmopolitan"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg text-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={closeMobileMenu}
                    >
                      Cosmopolitan Package
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink
                      to="/paint-correction"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg text-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={closeMobileMenu}
                    >
                      Paint Correction
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink
                      to="/ceramic"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg text-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={closeMobileMenu}
                    >
                      Ceramic Coating
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink
                      to="/porsche"
                      className="block px-4 py-2 hover:bg-custom-blue rounded-lg text-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={closeMobileMenu}
                    >
                      Porsche Care
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4 text-black"
          >
            Gallery
          </ScrollLink>

          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4 text-black"
          >
            About Us
          </ScrollLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `font-bold transition duration-300 rounded-lg py-2 px-4 ${
                isActive 
                  ? 'bg-custom-blue text-white' 
                  : 'text-black hover:bg-custom-blue hover:text-white'
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `block text-center py-3 px-4 rounded-lg mb-2 ${
                isActive 
                  ? 'bg-custom-blue text-white' 
                  : 'text-black hover:bg-gray-100'
              }`
            }
            onClick={closeMobileMenu}
            end
          >
            Home
          </NavLink>

          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-center py-3 px-4 rounded-lg mb-2 text-black hover:bg-gray-100 cursor-pointer"
            onClick={closeMobileMenu}
          >
            Services
          </ScrollLink>

          <div className="relative mb-2">
            <button
              onClick={toggleDropdown}
              className={`w-full text-center py-3 px-4 rounded-lg flex items-center justify-between ${
                isDropdownOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
              aria-expanded={isDropdownOpen}
            >
              <span>Packages</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="mt-2 bg-gray-50 rounded-lg p-2">
                <NavLink
                  to="/interior"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-200 mb-1"
                  onClick={closeMobileMenu}
                >
                  Premium Interior
                </NavLink>
                <NavLink
                  to="/exterior"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-200 mb-1"
                  onClick={closeMobileMenu}
                >
                  Premium Exterior
                </NavLink>
                <NavLink
                  to="/cosmopolitan"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-200 mb-1"
                  onClick={closeMobileMenu}
                >
                  Cosmopolitan
                </NavLink>
                <NavLink
                  to="/paint-correction"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-200 mb-1"
                  onClick={closeMobileMenu}
                >
                  Paint Correction
                </NavLink>
                <NavLink
                  to="/ceramic"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Ceramic Coating
                </NavLink>
                <NavLink
                  to="/porsche"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Porsche Care
                </NavLink>
              </div>
            )}
          </div>

          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-center py-3 px-4 rounded-lg mb-2 text-black hover:bg-gray-100 cursor-pointer"
            onClick={closeMobileMenu}
          >
            Gallery
          </ScrollLink>

          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-center py-3 px-4 rounded-lg mb-2 text-black hover:bg-gray-100 cursor-pointer"
            onClick={closeMobileMenu}
          >
            About Us
          </ScrollLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `block text-center py-3 px-4 rounded-lg ${
                isActive 
                  ? 'bg-custom-blue text-white' 
                  : 'text-black hover:bg-gray-100'
              }`
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;