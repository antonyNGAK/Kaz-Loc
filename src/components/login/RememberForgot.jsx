import { Link } from "react-router-dom";

const RememberForgot = () => (
  <div className="remember-forgot">
    <label>
      <input type="checkbox" className="custom-checkbox" />
      Se souvenir
    </label>
    <Link to="/forgot-password" className="forgot-pass-link">
      mot de passe oublié ?
    </Link>
  </div>
);

export default RememberForgot;