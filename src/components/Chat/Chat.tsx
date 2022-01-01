import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "src/firebase/init";
import "./Chat.css";

const Chat = () => {
  const [text, setText] = useState("");
  const messagesRef = collection(db, "messages");
  const sendMessage = async (e: any) => {
    e.preventDefault();
    await addDoc(messagesRef, {
      text: text,
      createdAt: serverTimestamp(),
      uid: auth.currentUser?.uid,
      photoURL: auth.currentUser?.photoURL,
    });
    setText("");
  };
  return (
    <>
      <main></main>
      <form onSubmit={sendMessage}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Message in Lobby"
        />
        <button type="submit" disabled={!text}>
          👉
        </button>
      </form>
    </>
  );
};

export default Chat;
