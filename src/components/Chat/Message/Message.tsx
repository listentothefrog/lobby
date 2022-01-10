import React from "react";
import Moment from "react-moment";
import "./Message.css";

interface ChatMessageProps {
  text: string;
  photoURL: string;
  createdBy: string;
  createdAt: string;
}

const Message = (props: ChatMessageProps) => {
  const { text, photoURL, createdBy, createdAt } = props;
  return (
    <div className="message">
      <img src={photoURL} alt="user profile" />
      <div className="group">
        <div>
          <p className="text">{text}</p>
        </div>
        <div className="username">
          From {createdBy} at {""}
          <Moment format="DD/MM/YYYY" fromNow>
            {createdAt}
          </Moment>
        </div>
      </div>
    </div>
  );
};

export default Message;
