import React from "react";
import { auth } from "src/firebase/init";

const Chat = () => {
  return (
    <div>
      {auth.currentUser?.displayName}
      {auth.currentUser?.email}
      <img src={auth.currentUser?.photoURL! as string} />
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default Chat;
