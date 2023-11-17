import { Link } from "react-router-dom";
import getGoogleOAuthUrl from "../services/googleService";
import "./CSS/LoginSignup.css";

export const Signup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn">Continue</button>
        <button className="google-api" onClick={getGoogleOAuthUrl()}>
          Google
        </button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        {/* <p>
          <a href={getGoogleOAuthUrl()}>register with google</a>
        </p> */}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing,i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
