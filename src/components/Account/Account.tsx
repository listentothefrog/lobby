import React from "react";
import { auth } from "src/firebase/init";

const Account = () => {
  return <div>{auth.currentUser?.displayName}</div>;
};

export default Account;
