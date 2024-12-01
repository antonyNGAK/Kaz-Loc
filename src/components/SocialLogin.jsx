import Google from "../assets/google.png";
import Github from "../assets/github.png";

const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        <img src={Google} alt="" className="social-icon" />
        Google
      </button>
      <button className="social-button">
        <img src={Github} alt="" className="social-icon" />
        Github
      </button>
    </div>
  );
};

export default SocialLogin;
