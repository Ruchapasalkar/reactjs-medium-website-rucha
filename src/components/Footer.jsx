import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <div className="flex flex-wrap justify-center space-x-4">
        <Link to="/help" className="hover:underline">
          Help
        </Link>
        <Link to="/status" className="hover:underline">
          Status
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link> 
        <Link to="/careers" className="hover:underline">
          Careers
        </Link>
        <Link to="/press" className="hover:underline">
          Press
        </Link>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
        <Link to="/privacy" className="hover:underline">
          Privacy
        </Link>
        <Link to="/terms" className="hover:underline">
          Terms
        </Link>
        <Link to="/teams" className="hover:underline">
          Teams
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
