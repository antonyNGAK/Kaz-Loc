import React, { useState } from "react";
import "../styles/scss pages/Register.scss";
import InputField from "../components/InputField";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import LoginLink from "../components/LoginLink";
import TermsWrapper from "../components/TermsWrapper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/Firebase"; // eslint-disable-line no-unused-vars
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
        });
      }
      console.log("Votre compte a été avec succès !");
    } catch (error) {
      console.log(error.message);
    }

    e.preventDefault();
    // Gérer la soumission du formulaire
  };

  return (
    <div className="register-container">
      <h1 className="form-title">Inscription</h1>

      <form onSubmit={handleSubmit} className="register-form">
        <InputField
          type="text"
          placeholder="Entrez votre nom"
          onChange={(e) => setName(e.target.value)}
          Icon={CiUser}
        />
        <InputField
          type="email"
          placeholder="Entrez votre adresse email"
          onChange={(e) => setEmail(e.target.value)}
          Icon={CiMail}
        />
        <InputField
          type="password"
          placeholder="Entrez votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          Icon={CiLock}
        />
        <InputField
          type="password"
          placeholder="Confirmez votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          Icon={CiLock}
        />

        <TermsWrapper />

        <button type="submit" className="register-button">
          S&apos;inscrire
        </button>
      </form>
      <LoginLink />
    </div>
  );
};

export default Register;
