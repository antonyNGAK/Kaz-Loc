import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Separator from "../components/login/Separator";
import SocialLogin from "../components/login/SocialLogin";
import InputField from "../components/InputField";
import RememberForgot from "../components/login/RememberForgot";
import RegisterLink from "../components/login/RegisterLink";
import "../styles/scss pages/login.scss";
import { CiMail, CiLock } from "react-icons/ci";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); // Gérer la soumission du formulaire

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Votre connexion a été un succès !");
      window.location.href = "/profile";
      toast.success("Connexion réussie !", { position: "top-center" });
      navigate.to("/homeConnect");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="login-container">
      <h1 className="form-title">Connexion</h1>

      <form onSubmit={handleSubmit} className="login-form">
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
        <RememberForgot />
        <button type="submit" className="login-button">
          
            Se connecter
          
        </button>
      </form>
      <Separator />
      <SocialLogin />
      <RegisterLink />
    </div>
  );
};

export default Login;