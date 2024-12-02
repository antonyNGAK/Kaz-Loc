import React, { useState } from "react";
import "../styles/scss pages/register.scss";
import InputField from "../components/InputField";
import LoginLink from "../components/register/LoginLink";
import TermsWrapper from "../components/register/TermsWrapper";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Gérer la soumission du formulaire

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
      console.log("Votre compte a été crée avec succès !");
      toast.success("Inscription réussie !", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="register-container">
      <h1 className="form-title">Inscription</h1>

      <form onSubmit={handleSubmit} className="register-form">
        <InputField
          type="text"
          placeholder="Entrez votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          Icon={CiUser}
        />
        <InputField
          type="email"
          placeholder="Entrez votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          Icon={CiMail}
        />
        <InputField
          type="password"
          placeholder="Entrez votre mot de passe"
          value={password}
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