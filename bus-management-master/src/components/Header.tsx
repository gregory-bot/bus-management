import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl text-[#8B0000]">
            suppermetro
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              home
            </a>
            <a href="#book" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              book route
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              contact
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              about us
            </a>
            <a href="#more" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              more
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#8B0000] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-red-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-4">
          <button
            className="mb-4 text-gray-700 hover:text-[#8B0000]"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-gray-700 hover:text-[#8B0000] transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              href="#book"
              className="text-gray-700 hover:text-[#8B0000] transition-colors"
              onClick={handleLinkClick}
            >
              Book Route
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#8B0000] transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#8B0000] transition-colors"
              onClick={handleLinkClick}
            >
              About Us
            </a>
            <a
              href="#more"
              className="text-gray-700 hover:text-[#8B0000] transition-colors"
              onClick={handleLinkClick}
            >
              More
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;