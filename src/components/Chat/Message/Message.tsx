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
      <img className="avatar" src={photoURL} alt="user profile" />
      <div className="group">
        <div>
          <div className="header">
            <h2>{createdBy}</h2>{" "}
            <span>
              <Moment format="DD/MM/YYYY" fromNow>
                {createdAt}
              </Moment>
            </span>
          </div>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
