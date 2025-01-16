import React from 'react';

function Main() {
  return(
    <div className="text-center p-8">
      <h1 className="text-8xl font-serif font-bold leading-tight text-left">
        Human <br />
        <span className="text-gray-900">Stories & ideas</span>
      </h1>
      <p className="text-4xl mt-4 text-left"> A place to read, write, and deepen your understanding</p>
      <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-lg origin-left">
        Start Reading
      </button>
    </div>
  );
}

export default Main;