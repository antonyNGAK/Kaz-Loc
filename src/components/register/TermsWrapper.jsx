import { Link } from "react-router-dom";

const TermsWrapper = () => (
  <div className="terms-wrapper">
    <label>
      <input type="checkbox" className="custom-checkbox" required />
      J&apos;accepte les{" "}
      <Link href="/terms" className="terms-link">
        Conditions générales
      </Link>
    </label>
  </div>
);

export default TermsWrapper;