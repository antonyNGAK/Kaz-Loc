// NavBar.jsx
import React from 'react'; // Assurez-vous que ce chemin est correct


/**
 * Composant NavBar pour afficher la barre de navigation avec le logo et les liens
 * @returns {JSX.Element} Le composant
 */

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Kaz'Loc</span>
      </div>
      <div className="navbar-links">
        <a href="/">Accueil</a>
        <a href="/recherche">Recherche</a>
        <a href="/about">A Propos</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar-actions">
        <button className="login-button">Connexion</button>
      </div>
    </nav>
  );
};

export default NavBar;

