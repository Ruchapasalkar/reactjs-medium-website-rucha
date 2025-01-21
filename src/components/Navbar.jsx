import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center font-bold relative">
      <h1 className="text-2xl font-serif">Medium</h1>
      <button
        className="hamburger lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
      <div className="hidden lg:flex space-x-4">
        <Link to="/our-story" className="hover:underline">
          Our Story
        </Link>
        <Link to="/membership" className="hover:underline">
          Membership
        </Link>
        <Link to="/write" className="hover:underline">
          Write
        </Link>
        <Link to="/sign-in" className="hover:underline">
          Sign In
        </Link>
        <button className="px-4 py-2 bg-black rounded-full font-bold">
          Get Started
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden">
          <Link to="/our-story" className="py-2 hover:underline">
            Our Story
          </Link>
          <Link to="/membership" className="py-2 hover:underline">
            Membership
          </Link>
          <Link to="/write" className="py-2 hover:underline">
            Write
          </Link>
          <Link to="/sign-in" className="py-2 hover:underline">
            Sign In
          </Link>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
