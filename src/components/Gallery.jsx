import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import { useDataLocation } from './LocationContext'

/**
 * Affichage de la liste de logements avec le composant gallery
 * @returns {JSX.Element} Le composant Gallery
 */
const Gallery = () => {
  
  // Récupère des logements du contexte Location
   
  const { logements } = useDataLocation()

  return (
    <section className="home__gallery">
      {logements.map((location) => (
        // Pour chaque logement, on crée un lien vers la page détaillé du logement
        <article key={location.id}>
          <Link to={`/location/${location.id}`}>
            <Cards image={location.cover} title={location.title} />
          </Link>
        </article>
      ))}
    </section>
  )
}

export default Gallery