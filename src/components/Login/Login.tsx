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
    <>
      <div className="welcome-div">
        <h1 className="welcome-heading">Welcome to Lobby!</h1>
        <p className="welcome-subtitle">
          The Foundation for{" "}
          <a
            className="astrowrld-link"
            target="_blank"
            rel="noopener"
            href="https://github.com/listentothefrog/astrowrld"
          >
            Astrowrld
          </a>
        </p>
      </div>
      <button onClick={() => googleAuthProvider()} className="sign-with-google">
        Sign in with Google
      </button>
    </>
  );
};

export default Login;
