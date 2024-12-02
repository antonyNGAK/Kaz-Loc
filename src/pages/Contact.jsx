import contactPageImage from "../assets/imgContact.png";
import "../styles/scss pages/Contact.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="heading">
        <h1>Contactez nous</h1>
        <p>
          Bienvenue sur notre plateforme dédiée à la recherche de logements.
          Pour toutes demandes liées à la recherche de logements. Merci de nous
          contacter aux adresses suivantes.
        </p>
      </div>

      <div className="container">
        <section className="contact">
          <div className="contact-img">
            <img src={contactPageImage} alt="MonImg" />
          </div>
          <div className="contact-content">
            <div className="contactInfo">
              <div className="boxContact">
                <div className="iconContact">
                  <FaMapMarkerAlt />
                </div>
                <div className="textContact">
                  <h2>Adresse</h2>
                  <p>
                    123 rue du code, <br /> Brunge, Mali, <br /> 44171
                  </p>
                </div>
              </div>

              <div className="boxContact">
                <div className="iconContact">
                  <FaPhoneAlt />
                </div>
                <div className="textContact">
                  <h2>Téléphone</h2>
                  <p>+223 20 20 20 20</p>
                </div>
              </div>

              <div className="boxContact">
                <div className="iconContact">
                  <IoIosMail />
                </div>
                <div className="textContact">
                  <h2>Email</h2>
                  <p>kazloc.entreprise@site.fr</p>
                </div>
              </div>
            </div>

            <h2>Notre objectif est simple :</h2>
            <p>
              faciliter la recherche de logements pour tous les besoins,
              qu&apos;il s&apos;agisse d&apos;appartements, de maisons, de
              studios ou de résidences temporaires. Grâce à l&apos;utilisation
              de ReactJS, une technologie moderne et performante, et de SCSS,
              qui nous permet de concevoir des interfaces soignées et élégantes,
              nous avons construit un outil intuitif et puissant.{" "}
            </p>

            <h3>Ce qui nous distingue :</h3>

            <ol>
              <li>
                <strong>Simplicité et efficacité :</strong> Notre plateforme a
                été pensée pour offrir une expérience utilisateur fluide, avec
                des filtres personnalisés qui permettent de trouver rapidement
                le logement idéal.
              </li>
              <li>
                <strong>Esprit collaboratif :</strong> Ce projet reflète notre
                capacité à travailler en équipe, à allier nos forces pour
                relever les défis et à transformer nos idées en solutions
                concrètes.
              </li>
              <li>
                <strong>Technologies modernes :</strong> En exploitant les
                dernières avancées en développement web, nous proposons un site
                rapide, réactif et sécurisé.
              </li>
            </ol>
            <p>
              Nous sommes fiers de présenter ce projet comme une illustration de
              notre passion pour le web et notre volonté de répondre à un besoin
              essentiel de manière innovante.
            </p>
            <button className="welcome">Merci pour votre lecture</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
