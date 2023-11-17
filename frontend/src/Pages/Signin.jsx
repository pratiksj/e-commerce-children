import { Link } from "react-router-dom";
import getGoogleOAuthUrl from "../services/googleService";
import "./CSS/LoginSignup.css";

export const SignIn = () => {
  //   const navigation = useNavigation();
  //   const signupNavigator = () => {
  //     navigation("/register");
  //   };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign In</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn">Login</button>
        <button className="google-api" onClick={getGoogleOAuthUrl()}>
          Google
        </button>
        <p className="loginsignup-login">
          Not registered yet? <Link to="/register">Signup here</Link>
        </p>
        {/* <p>
          <a href={getGoogleOAuthUrl()}>login with google</a>
        </p> */}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing,i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
