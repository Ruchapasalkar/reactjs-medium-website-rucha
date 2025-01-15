import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';
import OurStory from './pages/OurStory';
import Membership from './pages/Membership';
import Write from './pages/Write';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/our-story" element={<OurStory/>} />
          <Route path="/membership" element={<Membership/>} />
          <Route path="/write" element={<Write/>} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
