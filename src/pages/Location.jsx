import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDataLocation } from '../components/LocationContext';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import ReservationModal from '../components/ReservationModal'; // Modale de réservation
import '../styles/scss pages/location.scss';
import '../styles/scss components/carousel.scss';

/**
 * Composant ActiveLocation qui affiche les détails d'un logement spécifique
 * @returns {JSX.Element} Le composant ActiveLocation
 */
const ActiveLocation = () => {
  const { id } = useParams();
  const { logements } = useDataLocation();
  const [showModal, setShowModal] = useState(false); // État pour la modale

  // Trouver le logement correspondant à l'ID
  const logement = logements.find((logement) => logement.id === id);

  // Génération des équipements du logement
  const equipments = logement?.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      {logement ? (
        <main className="active-location">
          <div className="active-location__carousel">
            <Carousel images={logement.pictures} alt={logement.title} />
            <div className="active-location__title">
              <section className="active-location__name">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
              </section>
              <div className="active-location__tags">
                {logement.tags.map((tag, index) => (
                  <div key={index} className="tags__btn">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="active-location__ranking">
            <div className="active-location__host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <div className="active-location__description">
            <Collapse
              key={`${id}-description`}
              label="Description"
              children={logement.description}
            />
            <Collapse
              key={`${id}-equipments`}
              label="Équipements"
              children={equipments}
            />
          </div>
          <div className="active-location__reservation">
            <button className="reservation-btn" onClick={() => setShowModal(true)}>
              Réserver
            </button>
          </div>
          {showModal && (
            <ReservationModal
              logement={logement}
              onClose={() => setShowModal(false)}
            />
          )}
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ActiveLocation;
