
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";





const App = (props) => {
  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile dispatch= {props.dispatch}  profilePage={props.state.profilePage}/>} />
            <Route
              path="/dialogs/*"
              element={<Dialogs 
                store={props.store} dispatch={props.dispatch}/>}
            />

            <Route path="/News/*" element={<News />} />
            <Route path="/Music/*" element={<Music />} />
            <Route path="/Setting/*" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
