import React from 'react';
import './App.css';
import Home from './home';
import Navbar from './navbar';

function App() {
  return (
    <div className='bg-[#6577B3] min-h-screen p-3'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
