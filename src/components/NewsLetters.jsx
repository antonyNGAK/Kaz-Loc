import React, { useState } from "react";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const NewsLetters = () => {
  const [email, setEmail] = useState(""); // État pour stocker l'email
  const [message, setMessage] = useState(""); // État pour afficher les messages
  const [success, setSuccess] = useState(false); // État pour indiquer le statut de l'inscription

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Veuillez entrer une adresse email valide.");
      setSuccess(false);
      return;
    }

    try {
      // Remplacer par l'URL réelle du backend
      const response = await fetch("http://localhost:5000/newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Merci pour votre inscription à notre newsletter !");
        setSuccess(true);
        setEmail("");
      } else {
        const errorData = await response.json();
        setMessage(
          errorData.message || "Une erreur s'est produite. Veuillez réessayer."
        );
        setSuccess(false);
      }
    } catch (error) {
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
      setSuccess(false);
    }
  };

  return (
    <div className="col">
      <h3>
        Newsletter
        <div className="underline">
          <span></span>
        </div>
      </h3>
      <p>Inscrivez-vous pour recevoir nos dernières nouvelles.</p>
      <form onSubmit={handleSubmit}>
        <FaEnvelope className="far" />
        <input
          type="email"
          placeholder="Entrez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">
          <FaArrowRight className="fas" />
        </button>
      </form>
      {message && (
        <p className={`message ${success ? "success" : "error"}`}>{message}</p>
      )}
    </div>
  );
};

export default NewsLetters;
