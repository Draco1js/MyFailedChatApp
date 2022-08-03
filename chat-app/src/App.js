import LoginForm from "./components/LoginForm";
import React from "react";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  let ws;

  function showMessage(UserName, message, messages, messageBox) {
    messages.textContent += `\n\n${UserName}: ${message}`;
    messages.scrollTop = messages.scrollHeight;
    messageBox.value = "";
  }

  function init(main, errBox) {
    if (ws) {
      ws.onerror = ws.onopen = ws.onclose = null;
      ws.close();
    }

    ws = new WebSocket("ws://localhost:6969");
    ws.onopen = () => {
      console.log("Connection Is Now Open!");
    };
    ws.onmessage = ({ message }) => showMessage(message.userName, message.content);
    ws.onclose = function () {
      ws = null;
      setTimeout(() => {
        window.location.reload();
      }, 100000);
    };
  }
  init();
  if (true) return <ChatFeed websocket={ws} showMessage={showMessage} />;
  else return <LoginForm />;
};

export default App;
