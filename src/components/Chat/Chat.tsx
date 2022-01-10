import { addDoc, collection, query } from "@firebase/firestore";
import { onSnapshot, orderBy, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "src/firebase/init";
import "./Chat.css";
import Message from "./Message/Message";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
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
      id: Math.floor(Math.random() * 1000000000),
      text: text,
      createdBy: auth.currentUser?.displayName,
      createdAt: Timestamp.fromDate(new Date()),
      uid: auth.currentUser?.uid,
      photoURL: auth.currentUser?.photoURL,
    });
    setText("");
  };
  return (
    <>
      <nav>
        <div className="logo">
          <h1>✋ Lobby</h1>
        </div>

        <div className="account">your account</div>
      </nav>

      <main>
        {messages.map((msg: any) => (
          <Message
            key={msg.id}
            text={msg.text}
            photoURL={msg.photoURL}
            createdBy={msg.createdBy}
          />
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
