import React from "react";
import "../styles/scss components/cards.scss";

/**
 * Composant Cards qui affiche un cadre avec une image de logement, un titre, un prix, et une note
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.image - Image afficher sur la carte
 * @param {string} props.title - Titre afficher sur la carte
 * @param {string} props.price - Les prix
 * @param {number} props.rating - La note sur 5
 * @returns {JSX.Element} Le composant
 */
const Cards = ({ image, title, price, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="cards">
      <div className="cards__overlay"></div>
      <img src={image} alt={title} className="cards__cover" />
      <div className="cards__title">
        <h3 className="cards__title-text">{title}</h3>
        <p className="cards__price">{price} € / nuit</p>
        <div className="cards__rating">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default Cards;
