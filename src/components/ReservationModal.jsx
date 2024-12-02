import React, { useState } from 'react';
import '../styles/scss components/reservationModal.scss';

/**
 * Composant ReservationModal qui affiche une fenêtre modale pour la réservation
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.logement - Détails du logement
 * @param {Function} props.onClose - Fonction pour fermer la modale
 * @returns {JSX.Element} Le composant
 */
const ReservationModal = ({ logement, onClose }) => {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleReserve = () => {
    alert(`Réservation confirmée pour ${logement.title} le ${date} pour ${guests} invité(s).`);
    onClose();
  };

  return (
    <div className="reservation-modal">
      <div className="reservation-modal__content">
        <h2>Réserver {logement.title}</h2>
        <form>
          <label>
            Date :
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Nombre d'invités :
            <input
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </label>
          <div className="reservation-modal__actions">
            <button type="button" onClick={handleReserve} className="reserve-btn">
              Confirmer
            </button>
            <button type="button" onClick={onClose} className="close-btn">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
