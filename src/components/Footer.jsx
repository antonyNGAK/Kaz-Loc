import React from 'react';
import '../styles/scss components/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/terms">Conditions d'utilisation</a></li>
          <li><a href="/privacy">Politique de confidentialité</a></li>
        </ul>
      </div>
      <div className="footer__social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
