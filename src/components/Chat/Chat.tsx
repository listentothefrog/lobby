import { addDoc, collection, query } from "@firebase/firestore";
import { onSnapshot, orderBy, Timestamp } from "firebase/firestore";
import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import { auth, db } from "src/firebase/init";
import "./Chat.css";
import { Link, useNavigate } from "react-router-dom";
const Message = React.lazy(() => import("./Message/Message"));

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    if (!authToken) {
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

        <Link to="/account">
          <div className="account">your account</div>
        </Link>
      </nav>

      <main>
        {messages.map((msg: any) => (
          <Suspense key={msg.id} fallback={<p>Loading messages...</p>}>
            <Message
              key={msg.id}
              text={msg.text}
              photoURL={msg.photoURL}
              createdBy={msg.createdBy}
              createdAt={msg.createdAt.toDate()}
            />
          </Suspense>
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
