import React, { useState } from 'react'
import Button from './Button'
import '../styles/scss components/carousel.scss'

/**
 * Composant Carousel qui gère le diaporama
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.images -Images à afficher
 * @param {String} props.alt -Texte alternatif pour les images
 * @returns {JSX.Element} Composant Carousel
 */
const Carousel = ({ images, alt }) => {
  
    // Contrôle de l'image active
   
  const [currentImage, setCurrentImage] = useState(0)
  const length = images.length

  
   // Image suivante
   
  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  }

  // Image précédente
   
  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  }

  // Récupère l'image actif

  const currentPicture = images[currentImage]

  return (
    <div className="slider">
      <div className={length > 1 ? 'slide active' : 'slide'}>
        {currentPicture && <img src={currentPicture} alt={alt} />}
      </div>
      {length > 1 && (
        <>
          <Button onPrev={prevImage} onNext={nextImage} />
          <div className="counter">
            {currentImage + 1}/{length}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel