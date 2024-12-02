import { Link } from "react-router-dom";

const RegisterLink = () => (
  <p className="register-text">
    Vous n&apos;avez pas de compte ?{" "}
    <Link to="/register" className="register-link">
      S'inscrire
    </Link>
  </p>
);

export default RegisterLink;