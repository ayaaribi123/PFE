// src/App.js
import React from 'react';
import './App.css';
import Header from './Header/Header';
import signin from './Log/Signin'; 
import signup from './Log/Signup'; 
import footer from './Log/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-body'>
        <Signin />
      </div>
      <div className='App-body2'>
        <Signup />
      </div>
      <div className='App-body3'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
