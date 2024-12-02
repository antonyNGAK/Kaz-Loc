import React from "react";
import left from "../assets/Vector-left.svg";
import right from "../assets/Vector-right.svg";

/**
 * @param {Object} props -Propriétés du composant
 * @onPrev {function} Définition l'image précédente
 * @onNext {function} Définition l'image suivante
 * @returns {JSX.Element} boutons de contrôle
 */

const Button = ({ onPrev, onNext }) => (
  <div className="control">
    <img src={left} alt="left arrow" className="left-arrow" onClick={onPrev} />
    <img
      src={right}
      alt="right arrow"
      className="right-arrow"
      onClick={onNext}
    />
  </div>
);

export default Button;
