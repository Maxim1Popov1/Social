/* eslint-disable no-undef */
import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Max" },
    { id: 3, name: "Nick" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Tom" },
  ];

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />

  ));

  let messages = [
    { id: 1, message: "message" },
    { id: 2, message: "message" },
    { id: 3, message: "message" },
    { id: 4, message: "message" },
    { id: 5, message: "message" },
  ];

  let messagesElement = messages.map((m) => <Message id={m.id} message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>

      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
