import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <div>
      <div className="account">
        <div className="account-section">
          <div className="account-div">
            <img
              src={auth.currentUser?.photoURL! as string}
              alt="user profile picture"
            />
            <div className="user-info">
              <h1>{auth.currentUser?.displayName}</h1>
            </div>
          </div>
          <div className="margin">
            <p className="creation-time flex">
              Account Created At: {auth.currentUser?.metadata.creationTime}
            </p>
            <p className="creation-time flex">
              Last Sign In: {auth.currentUser?.metadata.lastSignInTime}
            </p>
          </div>
          <div className="margin">
            <button onClick={signOut}>Sign out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
