import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Rooms} from "./components/MainSection/Rooms/Rooms";
import {Chat} from "./components/MainSection/Chat/Chat";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Greeting} from "./components/Greeting/Greeting";

function App() {

    const [isOpenedChat, setIsOpenedChat] = useState(false);


  return (
    <Router>
        <Header
            buttonName={isOpenedChat ? "Выйти из комнаты" : "Создать комнату"}
            openChat={() => setIsOpenedChat(true)}
            closeChat={() => setIsOpenedChat(false)}
            isOpenedChat={isOpenedChat}
        />
        <div className="main_section">
            <Switch>
                <Route exact path="/" >
                    <Greeting />
                </Route>
                <Route exact path="/chat">
                    <Chat />
                </Route>
                <Route exact path="/rooms">
                    <Rooms
                        onClick = {() => setIsOpenedChat(true)}
                        isOpenedChat = {isOpenedChat}
                    />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
