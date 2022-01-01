import {
  addDoc,
  collection,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import { onSnapshot, orderBy } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "src/firebase/init";
import "./Chat.css";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  useEffect(() => {
    onSnapshot(q, (querySnapshot: any) => {
      let messages: any = [];
      querySnapshot.forEach((doc: any) => {
        messages.push(doc.data());
      });
      setMessages(messages);
    });
  }, []);

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
      <main>
        {messages.map((msg: any) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </main>
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
