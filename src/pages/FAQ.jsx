import { useState } from "react";
import "../styles/scss pages/FAQ.scss";

const FAQ = () => {
  // État pour suivre l'élément actuellement ouvert
  const [selected, setSelected] = useState(null);

  // Fonction pour gérer l'ouverture/fermeture des éléments
  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="wrapper">
      <h1 className="faq-heading">FAQ - Questions Fréquemment Posées</h1>
      <div className="accordion">
        {data.map((item, index) => (
          <div
            className={`accordion-item ${selected === index ? "active" : ""}`}
            key={index}
          >
            <div className="accordion-title" onClick={() => toggle(index)}>
              <h2>{item.question}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            {selected === index && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Liste des questions/réponses
const data = [
  {
    question: "Comment puis-je rechercher un logement sur votre site ?",
    answer:
      "Vous pouvez utiliser notre barre de recherche pour entrer une ville, une adresse ou un code postal. Ensuite, affinez vos résultats avec nos filtres, comme le prix, le type de logement et les équipements.",
  },
  {
    question: "Est-ce que l'utilisation de la plateforme est gratuite ?",
    answer:
      "Oui, l'inscription et l'utilisation de notre plateforme pour rechercher des logements sont totalement gratuites. Les frais peuvent être appliqués par les propriétaires ou gestionnaires de propriétés.",
  },
  {
    question: "Comment puis-je contacter un propriétaire ?",
    answer:
      "Après avoir trouvé un logement qui vous intéresse, utilisez la section 'Contacter l'hôte' sur la page du logement pour envoyer un message ou poser des questions.",
  },
  {
    question: "Quels types de logements puis-je trouver ici ?",
    answer:
      "Notre plateforme propose une grande variété de logements, notamment des appartements, des maisons, des studios, et même des résidences de vacances.",
  },
  {
    question: "Comment garantir la sécurité de ma réservation ?",
    answer:
      "Nous recommandons d'effectuer toutes vos transactions via notre plateforme sécurisée. N'envoyez jamais d'argent directement aux propriétaires en dehors de notre système.",
  },
  {
    question: "Puis-je annuler ou modifier ma réservation ?",
    answer:
      "Oui, les annulations et modifications sont possibles en fonction des conditions du propriétaire. Consultez les politiques d'annulation sur la page du logement avant de réserver.",
  },
  {
    question: "Que faire si j'ai un problème avec le logement réservé ?",
    answer:
      "Si vous rencontrez un problème, contactez immédiatement notre service client ou utilisez la fonctionnalité 'Signaler un problème' sur la plateforme pour obtenir de l'aide.",
  },
];

export default FAQ;
