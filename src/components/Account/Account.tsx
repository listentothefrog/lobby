import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "src/firebase/init";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    if (!authToken) {
      navigate("/");
    }
  }, []);
  const signOut = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/");
  };
  return (
    <div className="account-wrapper">
      <Link to="/lobby">
        <div className="return">👈 Back to Lobby</div>
      </Link>
      <div className="account-section">
        <div className="current-user-info">
          <img
            className="avatar"
            alt="avatar"
            src={auth.currentUser?.photoURL! as string}
          />
          <h1 className="current-username">{auth.currentUser?.displayName}</h1>
        </div>
        <div className="current-user-metadata">
          <h1>Account Created At: {auth.currentUser?.metadata.creationTime}</h1>
          <h1>Last Sign in: {auth.currentUser?.metadata.lastSignInTime}</h1>
          <h1>Email: {auth.currentUser?.email}</h1>
        </div>
        <div className="user-logout">
          <button onClick={signOut}>Sign Out</button>
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/listentothefrog/lobby/issues">
          <h3>Report a Bug</h3>
        </a>
        <a href="https://github.com/listentothefrog/lobby/issues">
          <h3>Astrowrld</h3>
        </a>
        <a href="https://twitter.com/la39zz">
          <h3>Twitter</h3>
        </a>
      </div>
    </div>
  );
};

export default Account;
