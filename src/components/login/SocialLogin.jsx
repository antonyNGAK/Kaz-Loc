import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import Google from "../../assets/google.png";
import Github from "../../assets/github.png";
import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (result.user) {
        toast.success("Vous êtes connecté avec Google !");
        window.location.href = "/profile"; // Redirection
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Erreur avec Google : " + error.message);
    }
  };

  const githubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (result.user) {
        toast.success("Vous êtes connecté avec GitHub !");
        window.location.href = "/profile"; // Redirection
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Erreur avec GitHub : " + error.message);
    }
  };

  return (
    <div className="social-login">
      <button className="social-button" onClick={googleLogin}>
        <img src={Google} alt="Google Icon" className="social-icon" />
        Google
      </button>
      <button className="social-button" onClick={githubLogin}>
        <img src={Github} alt="GitHub Icon" className="social-icon" />
        GitHub
      </button>
    </div>
  );
};

export default SocialLogin;