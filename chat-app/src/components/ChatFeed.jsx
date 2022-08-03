import React from "react";
import MessageBox from "./MessageBox";

const ChatFeed = ({ websocket, showMessage }) => {
  const ws = websocket;
  return (
    <div id="ErrWrapper">
      <h1 className="titleCenter">Real Time Messaging test</h1>
      <pre id="messages"></pre>
      <MessageBox gateway={ws} showMessage={showMessage} />
    </div>
  );
};

export default ChatFeed;
