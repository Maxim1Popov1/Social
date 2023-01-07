
 const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
    const SEND_MESSAGE = 'SEND-MESSAGE'

    let initialState = {
    
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Max" },
        { id: 3, name: "Nick" },
        { id: 4, name: "Alex" },
        { id: 5, name: "Tom" },],
    
      messages: [
      { id: 1, message: "message" },
      { id: 2, message: "message" },
      { id: 3, message: "message" },
      { id: 4, message: "message" },
      { id: 5, message: "message" },
    ],
    newMessageBody: " "
     
    
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY :
        state.newMessageBody = action.body;
        return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody =  '';
            state.messages.push({ id: 7, message: body })
            return state;
            default: 
            return state;
   }



}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default dialogsReducer  