import React from 'react'
import '../styles/scss components/cards.scss'

/**
 * Composant Cards qui affiche un cadre avec une image de logement et un titre
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.image - Image afficher sur la carte
 * @param {string} props.title - Titre afficher sur la carte
 * @param {string} props.price - Les prix
 * @returns {JSX.Element} Le composant
 */
const Cards = ({ image, title, price }) => {
  return (
    <div className="cards">
      <div className="cards__overlay"></div>
      <img src={image} alt={title} className="cards__cover" />
      <div className="cards__title">
        <h3>{title}</h3>
      <p>{price} € / nuit</p>
      </div>
    </div>
  );
};

export default Cards;
