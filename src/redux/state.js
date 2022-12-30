
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
 _state: {

  profilePage: {  
    posts: [
    { id:1, message: 'message', likesCount: 12} ,
    { id:2, message: 'message', likesCount: 13} ,
    { id:3, message: 'message', likesCount: 14} ,
    { id:4, message: 'message', likesCount: 125} ,
    { id:5, message: 'message', likesCount: 16} ],
    
    
     dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Max" },
    { id: 3, name: "Nick" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Tom" },],
    
   newPostText: 'it-kamasutra.com'
  },
  sideBar: {
    friends: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Max" },
    { id: 3, name: "Nick" },
    ]
  },

  messagesPage: {
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

},
_rerenderEntireTree() {
  console.log('state :>> ', );
},

_callSubscriber() {
  console.log('Subscriber :>> ');
},

getState() {
  return this._state
},
subscribe(observer) {
  this._callSubscriber = observer;
},



dispatch(action) {
  if (action.type === ADD_POST){
      let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount:0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
  } else if (action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
  } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    this._state.messagesPage.newMessageBody = action.body;
    this._callSubscriber(this._state);
  }
   else if (action.type === SEND_MESSAGE) {
   let body = this._state.messagesPage.newMessageBody
   this._state.messagesPage.newMessageBody =  '';
   this._state.messagesPage.messages.push({ id: 7, message: body })
    this._callSubscriber(this._state);
  }
}
}
 
export const addPostActionCreator = () => ({ type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text 
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })






export default store
