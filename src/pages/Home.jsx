import React from "react";
import "../styles/scss pages/Home.scss";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      {/* Barre de navigation */}
      <header className="navbar">
        <div className="navbar-logo">Kaz'Loc</div>
        <nav>
          <ul className="navbar-menu">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="home-content">
        <h1>Bienvenue sur Kaz'Loc</h1>
        <p>Une plateforme intuitive pour trouver et louer facilement.</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
