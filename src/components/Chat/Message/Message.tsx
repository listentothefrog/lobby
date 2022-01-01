import React from "react";
import "./Message.css";

interface ChatMessageProps {
  text: string;
  photoURL: string;
  createdBy: string;
}

const Message = (props: ChatMessageProps) => {
  const { text, photoURL, createdBy } = props;
  return (
    <div className="message">
      <img src={photoURL} alt="user profile" />
      <div className="group">
        <div>
          <p className="text">{text}</p>
        </div>
        <div className="username">
          <p>{createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
