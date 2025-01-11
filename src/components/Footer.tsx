import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} @suppermetro. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;