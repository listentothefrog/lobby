import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "src/firebase/init";

const Account = () => {
  const navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    if (!authToken) {
      navigate("/");
    }
  }, []);
  return <div>{auth.currentUser?.displayName}</div>;
};

export default Account;
