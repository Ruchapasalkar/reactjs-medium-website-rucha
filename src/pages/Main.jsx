import React from 'react';
import { Link } from 'react-router-dom'; 

function Main() {
  return (
    <div className="text-center p-8 max-w-screen-lg mx-auto">
      <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight text-left lg:text-center">
        Human <br />
        <span className="text-gray-900">Stories & Ideas</span>
      </h1>
      <p className="text-2xl md:text-4xl mt-4 text-left lg:text-center">
        A place to read, write, and deepen your understanding.
      </p>
      <Link to="/membership">
        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-lg">
          Start Reading
        </button>
      </Link>
    </div>
  );
}

export default Main;
