import React from 'react';

function Home() {
  return(
    <div className="text-center p-8">
      <h1 className="text-5xl font-serif font-bold leading-tight">
        Human <br />
        <span className="text-yellow-500">Stories & ideas</span>
      </h1>
      <p className="text-xl mt-4"> A place to read, write, and deepen your understanding</p>
      <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-lg">
        Start Reading
      </button>
    </div>
  );
}

export default Main;