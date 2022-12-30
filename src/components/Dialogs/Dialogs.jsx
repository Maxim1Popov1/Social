
import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import  { updateNewMessageBodyCreator } from './../../redux/state';
import { sendMessageCreator } from './../../redux/state';

const Dialogs = (props) => {

  let state = props.store.getState().messagesPage


  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id}  />
  ));

  let messagesElement = state.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));
  let newMessageBody = state.newMessageBody
  

    let onNewMessageChange = (e) => {
      let body = e.target.value
      props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator())
    }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div>
       
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
      <div>
        <div>
        <div><textarea value={newMessageBody}
        onChange={onNewMessageChange}
        placeholder="Enter your message"></textarea></div>
        <div><button onClick={ onSendMessageClick}>Send</button></div>
          </div>
      </div>
          </div>
    </div>
  );
};

export default Dialogs;
