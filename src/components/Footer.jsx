import Logo from "../assets/logo-img.png";
import "../styles/scss components/Footer.scss";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NewsLetters from "./NewsLetters";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={Logo} alt="logo" className="logoSite" />
          <p>
            Kaz'Loc est une plateforme intuitive dédiée à la recherche de
            logements, offrant une expérience simple et efficace pour trouver la
            location idéale. Grâce à des filtres personnalisés et des
            fonctionnalités innovantes, les utilisateurs peuvent explorer une
            large gamme d'options adaptées à leurs besoins. Que ce soit pour une
            location longue durée ou une recherche temporaire, Kaz'Loc facilite
            la mise en relation entre locataires et propriétaires.
          </p>
        </div>

        <div className="col">
          <h3>
            Nos réseaux
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <div className="social-icons">
            <a
              href="https://twitter.com/login"
              target="_blank" // ouvre dans un nouvel onglet
              rel="noopener noreferrer" //améliore la sécurité et empêche les vulnérabilités
              aria-label="Twitter"
            >
              <FaSquareXTwitter className="fab" />
            </a>
            <a
              href="https://github.com/antonyNGAK/Kaz-Loc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithubSquare className="fab" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="fab" />
            </a>
          </div>
        </div>

        <div className="col">
          <h3>
            Liens
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link to="/" className="mesPages">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="mesPages">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/faq" className="mesPages">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mesPages">
                Nos contacts
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <NewsLetters />
        </div>
      </div>

      <hr />
      <p className="copyright">
        Projet Kaz'Loc copyright 2024 - Tous les droits reservés
      </p>
    </footer>
  );
};

export default Footer;
