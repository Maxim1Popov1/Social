/* eslint-disable no-undef */
import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let newMessageElement = React.createRef();


  let  addMessage = () => {

    let text = newMessageElement.current.value;
    alert(text)
    }

  
  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id}  />
  ));

  let messagesElement = props.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div>
        <textarea ref={newMessageElement}>
        </textarea> 
         <button onClick={addMessage}>Add massage</button>
      </div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
