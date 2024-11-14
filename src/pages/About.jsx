import React from 'react'
import Collapse from '../components/Collapse'
import '../styles/scss pages/about.scss'

/**
 * @returns {JSX.Element} Contenu de la zone <A propos>
 */

const About = () => {
  return (
    <main className="about">
      <div className="about__content">
        <Collapse label="Fiabilité">
        <p>
          Les annonces postées sur Kaz'loc garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
        </Collapse>
        <Collapse label="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kaz'loc. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        </Collapse>
        <Collapse label="Service">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kaz'loc. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        </Collapse>
        <Collapse label="Sécurité">
        <p>
          La sécurité est la priorité de Kaz'loc. C'est pourquoi nous assurons un
          suivi qualité constant sur les logements mis en ligne. De plus, la
          totalité des transactions est gérée par nos soins.
        </p>
        </Collapse>
      </div>
    </main>
  )
}

export default About