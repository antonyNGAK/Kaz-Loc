import React from 'react'

/**
 * 
 * @param {object} props - Les propriétés des composant
 * @param {string} props.title - Titre de la Bannière
 * @param {string} props.BannerImage - Arrière Plan de la bannière
 * @returns {JSX.Element} Le composant
 */



const Banner = ({ title, BannerImage}) => {
    return (
        <div className = "banner">
            <div className="banner__overlay"></div>
            <img src= {BannerImage} alt="banner" className="banner__img" />
            <h2 className='banner__title'>
                <p>Bienvenu sur Kaz'Loc</p>
                <p>Votre site de réservation de logement entre particulier.</p>
            </h2>
            
        </div>
    )
}

export default Banner