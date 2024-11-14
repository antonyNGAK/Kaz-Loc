import React from "react"

/**
 * Composant Footer qui affiche un pied de page avec un logo et un texte de copyright et peut-être des liens
 * @returns {JSX.Element} Le composant Footer
 */
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <p>© 2020 Kaz'loc. All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default Footer