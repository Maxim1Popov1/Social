import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogs-reduser";
import profileReducer from './profile-reduser';
import  sidebarReducer  from './sideBar-reduser';


let redusers = combineReducers({
  profilePage:  profileReducer,
   messagePage: dialogsReducer,
   sidebar: sidebarReducer
})

let store = createStore(redusers)

export default store


