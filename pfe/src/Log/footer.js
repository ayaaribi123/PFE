import React from 'react';
import '../App.css';

export default function Footer() {
  return (
    <footer>
      <div className="footercontainer">
        <div className="icons">    
          <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.youtube.com"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div className="footerbottom">
        <p>Copyright &copy; Sky High</p>
      </div>
    </footer>
  );
};


