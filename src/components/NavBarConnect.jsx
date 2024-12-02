import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo-img.png'
import '../styles/scss components/NavBar.scss';

/**
 * Composant NavBar pour afficher la barre de navigation avec une barre de recherche dynamique
 * @returns {JSX.Element} Le composant
 */
const NavBarConnect = () => {
  const [isSearchVisible, setSearchVisible] = useState(false); // État pour afficher/masquer la barre de recherche
  const [searchInput, setSearchInput] = useState(''); // État pour le contenu de la recherche
  const navigate = useNavigate(); // Pour rediriger l'utilisateur

  // Gestion de la soumission de la recherche
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const allowedCategories = ['studio', 'appartement', 'maison', 'cabane']; // Catégories valides
    const sanitizedInput = searchInput.trim().toLowerCase();

    if (allowedCategories.includes(sanitizedInput)) {
      navigate(`/recherche?categorie=${sanitizedInput}`);
    } else {
      alert('Veuillez entrer une catégorie valide : studio, appartement, maison, ou cabane.');
    }

    setSearchVisible(false); // Masque la barre de recherche après soumission
    setSearchInput(''); // Réinitialise le champ de recherche
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" className="logoSite" />
      </div>
      <div className="navbar-links">
        <a href="/">Accueil</a>
        <button
          type="button" // Ajout pour s'assurer que le bouton n'est pas interprété comme un bouton de soumission
          className="search-toggle"
          onClick={() => setSearchVisible(!isSearchVisible)}
        >
          Recherche
        </button>
        <a href="/about">À Propos</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar-actions">
        <a href="/profile" className="login-button">Profil</a>
      </div>
      {/* Barre de recherche */}
      {isSearchVisible && (
        <div className="navbar-search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Rechercher par catégorie (studio, appartement, maison, cabane)"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-submit">
              Rechercher
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default NavBarConnect;
