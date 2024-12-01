import Separator from "../components/Separator";
import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import RememberForgot from "../components/RememberForgot";
import RegisterLink from "../components/RegisterLink";
import "../styles/scss pages/Login.scss";
import { CiMail, CiLock } from "react-icons/ci";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire
  };

  return (
    <div className="login-container">
      <h1 className="form-title">Connexion</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          type="email"
          placeholder="Entrez votre adresse email"
          Icon={CiMail}
        />
        <InputField
          type="password"
          placeholder="Entrez votre mot de passe"
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
