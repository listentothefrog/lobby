import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "src/firebase/init";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const googleAuthProvider = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        sessionStorage.setItem("Auth Token", result.user.refreshToken);
        navigate("/lobby");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorCode, errorMessage, email);
      });
  };
  return (
    <div className="landing-div">
      <div className="chat-svg"></div>
      <div className="landing-section-text">
        <h1 className="landing-text-heading">Welcome to Lobby!</h1>
        <p className="landing-text-subtitle">
          Lobby a place where you can.... belong to a a gaming group, an anime
          club, even a community of pepe's. I don't know if you know this but
          Lobby is the foundation for Astrowrld, where you can find subwrlds of
          your interests!
        </p>
      </div>
      <div className="button">
        <button className="sign-in-button" onClick={googleAuthProvider}>
          Open in the browser
        </button>
      </div>
    </div>
  );
};

export default Login;
