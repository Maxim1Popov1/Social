
// import profileReducer from './profile-reduser';
// import { sidebarReducer } from './sideBar-reduser';
// import dialogsReducer from './dialogs-reduser';


// let store = {
//  _state: {

//   profilePage: {  
//     posts: [
//     { id:1, message: 'message', likesCount: 12} ,
//     { id:2, message: 'message', likesCount: 13} ,
//     { id:3, message: 'message', likesCount: 14} ,
//     { id:4, message: 'message', likesCount: 125} ,
//     { id:5, message: 'message', likesCount: 16} ],
    
//        newPostText: 'it-kamasutra.com',
//      dialogs: [
//     { id: 1, name: "Dima" },
//     { id: 2, name: "Max" },
//     { id: 3, name: "Nick" },
//     { id: 4, name: "Alex" },
//     { id: 5, name: "Tom" },],
    

//   },
//   sideBar: {
//     friends: [
//     { id: 1, name: "Dima" },
//     { id: 2, name: "Max" },
//     { id: 3, name: "Nick" },
//     ]
//   },

//   messagesPage: {
//     dialogs: [
//       { id: 1, name: "Dima" },
//       { id: 2, name: "Max" },
//       { id: 3, name: "Nick" },
//       { id: 4, name: "Alex" },
//       { id: 5, name: "Tom" },],
  
//     messages: [
//     { id: 1, message: "message" },
//     { id: 2, message: "message" },
//     { id: 3, message: "message" },
//     { id: 4, message: "message" },
//     { id: 5, message: "message" },
//   ],
//   newMessageBody: " "
   
//   }

// },
// _rerenderEntireTree() {
//   console.log('state :>> ', );
// },

// _callSubscriber() {
//   console.log('Subscriber :>> ');
// },

// getState() {
//   return this._state
// },
// subscribe(observer) {
//   this._callSubscriber = observer;
// },



// dispatch(action) {

//   this._state.profilePage = profileReducer(this._state.profilePage, action)
//   this._state.sideBar = sidebarReducer(this._state.sideBar, action)
//   this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
 
 
//     this._callSubscriber(this._state);
//   }
// }

 


// export default store
