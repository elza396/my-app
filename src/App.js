import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Rooms} from "./components/MainSection/Rooms/Rooms";
import {Chat} from "./components/MainSection/Chat/Chat";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Greeting} from "./components/Greeting/Greeting";
import {NAV_CHAT, NAV_ROOMS, NAV_ROOT} from "./constants/navigation";

function App() {
  return (
    <Router>
        <Header/>
        <div className="main_section">
            <Switch>
                <Route exact path={NAV_ROOT} >
                    <Greeting />
                </Route>
                <Route exact path={NAV_CHAT}>
                    <Chat />
                </Route>
                <Route exact path={NAV_ROOMS}>
                    <Rooms/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
