// src/App.js
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Signin from './Log/Signin'; 
import Signup from './Log/Signup'; 
import Footer from './Log/Footer';

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
