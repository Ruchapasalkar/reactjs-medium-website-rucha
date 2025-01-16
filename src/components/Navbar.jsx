import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center font-bold">
      <h1 className="text-2xl font-serif">Medium</h1>
      <div className="flex space-x-4">
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
    </nav>

  );
}

export default Navbar;
