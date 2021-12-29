import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "src/firebase/init";
const Login = () => {
  const googleAuthProvider = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorCode, errorMessage, email);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => googleAuthProvider()}
          className="sign-with-google"
        >
          Sign in with Google
        </button>
      </header>
    </div>
  );
};

export default Login;
