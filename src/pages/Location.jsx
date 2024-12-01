import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useDataLocation } from '../components/LocationContext'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import '../styles/scss pages/location.scss'
import '../styles/scss components/carousel.scss'




/**
 * Composant ActiveLocation qui affiche les détails d'un logement spécifique
 * @returns {JSX.Element} Le composant ActiveLocation
 */
const ActiveLocation = () => {
  // Récupère l'id du logement dans l'url
  const { id } = useParams()
  const { logements } = useDataLocation()
// Affichage du logement selon l'id correspondant
  const logement = logements.find((logement) => logement.id === id)

// Affichage de la liste des équipements du logement demandé
  const equipments = logement?.equipments.map((equipments, index) => {
   return <li key={index}>{equipments}</li>
  })

  return (
    <>
      {
        logement ? (
          <main className="active-location">
            <div className="active-location__carousel">
            <Carousel images = {logement.pictures} alt = {logement.title} />
            <div className="active-location__title">
              <section className="active-location__name">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
              </section>
              <div className="active-location__tags">
                {logement.tags.map((tag, index) => {
                  return (
                    <div key={index} className="tags__btn">
                      {tag}
                    </div>
                  )
                })}
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
            <Collapse //Détail sur la description
              key={`${id}-description`}
              label="Description"
              children={logement.description}
            />
            <Collapse //Détail des équipements
              key={`${id}-equipments`}
              label="Équipements"
              children={equipments}
            />
          </div>
          </main>
        ) :( // Si le logement n'existe pas, on redirige vers la page d'accueil
          <Navigate to="/" />
        )}
    </>
  )
}
export default ActiveLocation