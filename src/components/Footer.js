import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className='topMargin16px'>
      <a className="social-icons" href="https://github.com/thinkful-ei23/cozy-spaces-client">
        <i className="fab fa-github social-icons" title="Link to github"></i>
      </a>
      <a href="https://twitter.com/CozySpacesApp">
        <i className="fab fa-twitter social-icons" title="Link to twitter"></i>
      </a>
      <a href="https://www.instagram.com/cozyspacesapp/">
        <i className="fab fa-instagram social-icons"  title="Link to instagram" />
      </a>
      <p className='whiteFont'>Developed by the Magnificent 5 © 2018</p>
    </footer>
  );
}