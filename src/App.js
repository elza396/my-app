import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Rooms} from "./components/MainSection/Rooms/Rooms";
import {Chat} from "./components/MainSection/Chat/Chat";

function App() {

    const [isOpenedChat, setIsOpenedChat] = useState(false);


  return (
    <div>
      <Header
          buttonName={isOpenedChat ? "Выйти из комнаты" : "Создать комнату"}
          openChat={() => setIsOpenedChat(true)}
          closeChat={() => setIsOpenedChat(false)}
          isOpenedChat={isOpenedChat}
      />
      <div className="main_section">
          {isOpenedChat ? <Chat /> : <Rooms
              onClick={() => setIsOpenedChat(true)}
          />}
      </div>
    </div>
  );
}

export default App;
