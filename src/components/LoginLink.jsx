import { Link } from "react-router-dom";

const LoginLink = () => (
  <p className="login-text">
    Vous avez déjà un compte ?{" "}
    <Link to="/login" className="login-link">
      Se connecter
    </Link>
  </p>
);

export default LoginLink;
