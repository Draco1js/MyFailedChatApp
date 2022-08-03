// import React from "react";

// const messageBox = ({ websocket, showMessage }) => {
//   const ws = websocket;
//   const messageBox = document.getElementById("#messageBox");
//   function submit(e) {
//     e.preventDefault();

//     // Get message text
//     let msg = messageBox.value;

//     msg = msg.trim();

//     if (!msg) {
//       return false;
//     }
//     if (!ws) {
//       showMessage(
//         "Websocket Connection crashed, try contacting a developer or reloading the page!"
//       );
//     }
//     const data = {
//       content: msg,
//       userName: "userName",
//     };
//     ws.send(data);
//     showMessage(data.userName, data.msg);
//     // Clear input
//     messageBox.value = "";
//     messageBox.focus();
//   }
//   return (
//     <div className="InputWrapper">
//       <form id="InputWrapper" onSubmit={submit}>
//         <input
//           id="messageBox"
//           type="text"
//           placeholder="Type a message . . ."
//           autoComplete="off"
//         />
//         <button id="send" className="sendButton">
//           <span>Send</span>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default messageBox;


import { Formik } from "formik";

export default function ChatBox({ gateway, showMessage }) {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        if (values.name.length === 0) return;
        actions.resetForm({});

        const message = {
          userName: "Draco",
          content: values.name.replace("{shrug}", "¯\\_(ツ)_/¯"),
        };

        gateway.send(message)
      }}
    >
      {(props) => (
        <>
          <form
            onSubmit={showMessage}
            className="chatbox"
            autoComplete="off"
          >
            <input
              type="text"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.name}
              placeholder="Type a message "
              id="chatbox_input"
              name="name"
            />
          </form>

          {/* <Picker onSelect={(d) => {props.values.name += d.native}} /> */}
        </>
      )}
    </Formik>
  );
}